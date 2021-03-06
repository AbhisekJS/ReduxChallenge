export  function timeString(val) {
	const arr = val.split(':'); // splitting the string by colon
	const seconds = arr[0] * 3600 + arr[1] * 60; // converting
	return seconds;
}

export function convertTime(sec) {
	var hours = Math.floor(sec / 3600);
	hours >= 1 ? (sec = sec - hours * 3600) : (hours = '00');
	var min = Math.floor(sec / 60);
	min >= 1 ? (sec = sec - min * 60) : (min = '00');
	sec < 1 ? (sec = '00') : void 0;

	min.toString().length === 1 ? (min = '0' + min) : void 0;
	sec.toString().length === 1 ? (sec = '0' + sec) : void 0;

	return (hours + ':' + min + ':' + sec);
}
