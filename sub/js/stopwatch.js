const $time = document.querySelector(".watch .time");

const $start_btn = document.getElementById("start");
const $stop_btn = document.getElementById("stop");
const $reset_btn = document.getElementById("reset");
const $record_btn = document.getElementById("record");
const $record_list = document.getElementById("recordList");

let $seconds = 0;
let $interval = null;
let $records = "";

//EventListener
$start_btn.addEventListener("click", start);
$stop_btn.addEventListener("click", stop);
$reset_btn.addEventListener("click", reset);
$record_btn.addEventListener("click", record);

//시간 업데이트
const timer = () => {
  $seconds++;

  //시간, 분, 초 format
  let $secs = $seconds % 60;
  let $mins = Math.floor($seconds / 60);
  let $hrs = Math.floor($mins / 60);

  //한자리 -> 두자리 처리
  if ($secs < 10) {
    $secs = "0" + $secs;
  }
  if ($mins < 10) {
    $mins = "0" + $mins;
  }
  if ($hrs < 10) {
    $hrs = "0" + $hrs;
  }

  $time.innerText = `${$hrs}:${$mins}:${$secs}`;
};

function start() {
  if ($interval) {
    return;
  }
  $interval = setInterval(timer, 1000);
}

function stop() {
  clearInterval($interval);
  $interval = null;
}

function reset() {
  stop();
  $seconds = 0;
  $time.innerText = "00:00:00";
  $record_list.innerText = '';
  $records = '';
}

function record() {
  // $records += "" + document.getElementById("time").innerText + "\n";
  // $record_list.innerText = $records;

  // $records = document.getElementById("time").innerText + "\n";
  // $record_list.append("<li>" + $records + "</li>");
  // console.log($record_list, $records)

  const $li = document.createElement('li');
  $li.innerHTML = document.getElementById("time").innerText;
  document.getElementById('recordList').appendChild($li);
  
}
  
