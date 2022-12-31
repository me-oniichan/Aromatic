const Generator = (restricted, activities) => {

    let dailyhours = 24 - restricted.length;
    let dailyshare = Math.floor(dailyhours / activities.length);
    let dailyweight = new Array(activities.length).fill(dailyshare);

    let dremainder = dailyhours % activities.length;
    for (let i = 0; i < dremainder; i++) dailyweight[i] += 1;

    dailyweight = dailyweight.filter((i) => i != 0);

    let schedule = new Array();
    let dpointer = 0;
    let apointer = 0;

    for (let i = 0; i < 5; i++) {
        let hourleft = dailyhours;
        let day = new Array();
        while (hourleft > 0) {
            day.push([(dpointer+apointer)%activities.length, dailyweight[dpointer%dailyweight.length]]);
            hourleft -= dailyweight[dpointer%dailyweight.length];
            dpointer++;
        }
        schedule.push(day);
        apointer++;
    }

    return schedule.map(i=>{
        let index = 0;
        const day = new Array(24).fill(null);
        return day.map((activity,j)=>{
            if (restricted.includes(j)) return null;
            if (i[index][1] == 0) index++;
            i[index][1]--;
            return i[index][0]
        })
    })
};

export default Generator;