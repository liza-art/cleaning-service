const form = document.getElementById("orderForm");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const f = new FormData(form);

    const area = f.get("area");
    const district = f.get("district");
    const type = f.get("type");
    const date = f.get("date");
    const time = f.get("time") || "не указано";
    const note = f.get("note");
    const text = `Доброго дня! Хочу замовити прибирання.
Площа: ${area} м²
Район: ${district}
Тип: ${type}
Дата: ${date}
Час: ${time}
Побажання: ${note}`;

    const url = "https://t.me/gvozddash?text=" + encodeURIComponent(text);
    const win = window.open(url, "_blank", "noopener,noreferrer");
    if (!win) {
        // Fallback if popup was blocked
        window.location.href = url;
    }
});
