const $time = document.querySelector(".watch .time");

const $start_btn = document.getElementById("start");
const $stop_btn = document.getElementById("stop");
const $reset_btn = document.getElementById("reset");

let $seconds = 0;
let $interval = null;

//EventListener
$start_btn.addEventListener("click", start);
$stop_btn.addEventListener("click", stop);
$reset_btn.addEventListener("click", reset);

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
}
