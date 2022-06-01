let daily = document.querySelector('.daily');
let weekly = document.querySelector('.weekly');
let monthly = document.querySelector('.monthly');

let title = document.querySelectorAll('.title');
let hour = document.querySelectorAll('.hour');
let previous = document.querySelectorAll('.pervius-hour');

let state = 'weekly';

let data = [
  {
    "title": "Work",
    "timeframes": {
      "daily": {
        "current": 5,
        "previous": 7
      },
      "weekly": {
        "current": 32,
        "previous": 36
      },
      "monthly": {
        "current": 103,
        "previous": 128
      }
    }
  },
  {
    "title": "Play",
    "timeframes": {
      "daily": {
        "current": 1,
        "previous": 2
      },
      "weekly": {
        "current": 10,
        "previous": 8
      },
      "monthly": {
        "current": 23,
        "previous": 29
      }
    }
  },
  {
    "title": "Study",
    "timeframes": {
      "daily": {
        "current": 0,
        "previous": 1
      },
      "weekly": {
        "current": 4,
        "previous": 7
      },
      "monthly": {
        "current": 13,
        "previous": 19
      }
    }
  },
  {
    "title": "Exercise",
    "timeframes": {
      "daily": {
        "current": 1,
        "previous": 1
      },
      "weekly": {
        "current": 4,
        "previous": 5
      },
      "monthly": {
        "current": 11,
        "previous": 18
      }
    }
  },
  {
    "title": "Social",
    "timeframes": {
      "daily": {
        "current": 1,
        "previous": 3
      },
      "weekly": {
        "current": 5,
        "previous": 10
      },
      "monthly": {
        "current": 21,
        "previous": 23
      }
    }
  },
  {
    "title": "Self Care",
    "timeframes": {
      "daily": {
        "current": 0,
        "previous": 1
      },
      "weekly": {
        "current": 2,
        "previous": 2
      },
      "monthly": {
        "current": 7,
        "previous": 11
      }
    }
  }
]

function renderData() {
  for (let i = 0; i < title.length; i++) {
    title[i].innerHTML = data[i].title
    hour[i].innerHTML = data[i].timeframes.weekly.current + "hrs"
  }
}
renderData()

daily.addEventListener('click', dailyData);
weekly.addEventListener('click', weeklyDate);
monthly.addEventListener('click', monthlyDate)


//the dailyData function
function dailyData() {
  state = 'daily';
  for (let i = 0; i < hour.length; i++) {
    hour[i].innerHTML = data[i].timeframes.daily.current + 'hrs';
    previous[i].innerHTML = "yesterday - " + data[i].timeframes.daily.previous + 'hrs';
  }
}


//the weeklyDate function
function weeklyDate() {
  state = 'weekly';
  for (let i = 0; i < hour.length; i++) {
    hour[i].innerHTML = data[i].timeframes.weekly.current + 'hrs';
    previous[i].innerHTML = "last week - " + data[i].timeframes.weekly.previous + 'hrs';

  }
}

//the monthly function
function monthlyDate() {
  state = 'monthly';
  for (let i = 0; i < hour.length; i++) {
    hour[i].innerHTML = data[i].timeframes.monthly.current + 'hrs';
    previous[i].innerHTML = "last month - " + data[i].timeframes.monthly.previous + 'hrs';


  }
}


//this section is for toggling between the daily, weekly and monthly
function toggleActive(e) {
  daily.classList.remove('active');
  weekly.classList.remove('active');
  monthly.classList.remove('active');
  if (!e.target.classList.contains('active')) {
    e.target.classList.add('active');
  }
  state = e.target.dataset.state;
  console.log(state)

}

//here we called the function
daily.addEventListener('click', toggleActive);
weekly.addEventListener('click', toggleActive);
monthly.addEventListener('click', toggleActive);

