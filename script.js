const dailyBtn = document.querySelector('#daily');
const weeklyBtn = document.querySelector('#weekly');
const monthlyBtn = document.querySelector('#monthly');

const hours = document.querySelectorAll('.big-text');
const lastTime = document.querySelectorAll('.small-text');

function dailyData(){
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            hours.forEach((e,i) => {
                hours[i].innerHTML = data[i].timeframes.daily.current + 'hrs';
                lastTime[i].innerHTML = 'Yesterday - ' + data[i].timeframes.daily.previous + 'hrs';
            })
        })
}

function weeklyData(){
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            hours.forEach((e,i) => {
                hours[i].innerHTML = data[i].timeframes.weekly.current + 'hrs'
                lastTime[i].innerHTML = 'Last Week - ' + data[i].timeframes.weekly.previous + 'hrs'
            })
        })
}

function monthlyData(){
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            hours.forEach((e,i) => {
                hours[i].innerHTML = data[i].timeframes.monthly.current + 'hrs'
                lastTime[i].innerHTML = 'Last Month - ' + data[i].timeframes.monthly.previous + 'hrs'
            })
        })
}


dailyBtn.addEventListener('click', () => {
    monthlyBtn.classList.remove('active')
    dailyBtn.classList.add('active')
    weeklyBtn.classList.remove('active')
    dailyData()
})

weeklyBtn.addEventListener('click', () => {
    monthlyBtn.classList.remove('active')
    dailyBtn.classList.remove('active')
    weeklyBtn.classList.add('active')
    weeklyData()
})

monthlyBtn.addEventListener('click', () => {
    monthlyBtn.classList.add('active')
    dailyBtn.classList.remove('active')
    weeklyBtn.classList.remove('active')
    monthlyData()
})

window.onload = weeklyData();
window.onload = weeklyBtn.classList.add('active');