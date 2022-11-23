const $ddayTime = document.querySelector("h2");

const getDDay = () => {
	// D-Day 날짜 지정
	const setDate = new Date("2023-11-16");
	const setDateYear = setDate.getFullYear();
	const setDateMonth = setDate.getMonth() + 1;
	const setDateDay = setDate.getDate();

	const now = new Date();

	const distance = setDate.getTime() - now.getTime();

	const day = Math.floor(distance / (1000 * 60 * 60 * 24));
	const hours = Math.floor(
		(distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
	);
	const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	const seconds = Math.floor((distance % (1000 * 60)) / 1000);

	$ddayTime.innerText = `${day}일  ${hours < 10 ? `0${hours}` : hours}시간  ${minutes < 10 ? `0${minutes}` : minutes}분 ${seconds < 10 ? `0${seconds}` : seconds}초`;
};

const init = () => {
	getDDay();
	setInterval(getDDay, 1000);
};

init();
