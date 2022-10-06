const timeElement = document.getElementById("time");

dayjs.extend(window.dayjs_plugin_relativeTime);

const updatedAt = new Date(2022, 5, 20);
const updatedAtText = dayjs(updatedAt).fromNow();

timeElement.innerText = updatedAtText;
