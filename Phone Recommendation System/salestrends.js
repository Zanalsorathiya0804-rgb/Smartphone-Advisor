document.addEventListener("DOMContentLoaded", function () {
    // Define data for different phones
    const phoneData = {
        iphone: {
            sales: { current: 1200, future: 1500, trend: [1100, 1150, 1200, 1250, 1400, 1500] },
            price: { current: 999, future: 1050, trend: [950, 970, 999, 1020, 1035, 1050] }
        },
        samsung: {
            sales: { current: 1000, future: 1300, trend: [900, 950, 1000, 1100, 1200, 1300] },
            price: { current: 799, future: 850, trend: [750, 770, 799, 820, 840, 850] }
        },
        oneplus: {
            sales: { current: 800, future: 1000, trend: [700, 750, 800, 850, 900, 1000] },
            price: { current: 699, future: 750, trend: [650, 670, 699, 720, 740, 750] }
        },
        pixel: {
            sales: { current: 900, future: 1100, trend: [850, 880, 900, 950, 1000, 1100] },
            price: { current: 899, future: 950, trend: [850, 870, 899, 920, 940, 950] }
        }
    };

    let salesChartInstance = null;
    let priceChartInstance = null;

    window.predictSalesAndPrice = function () {
        const phone = document.getElementById("phoneSelect").value;
        const salesData = phoneData[phone].sales;
        const priceData = phoneData[phone].price;

        // Update UI
        document.getElementById("currentSales").innerText = salesData.current;
        document.getElementById("futureSales").innerText = salesData.future;
        document.getElementById("currentPrice").innerText = priceData.current;
        document.getElementById("futurePrice").innerText = priceData.future;

        // Generate Sales Chart
        const salesCtx = document.getElementById("salesChart").getContext("2d");
        if (salesChartInstance) salesChartInstance.destroy(); // Destroy previous instance
        salesChartInstance = new Chart(salesCtx, {
            type: "line",
            data: {
                labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
                datasets: [{
                    label: "Sales Trend",
                    data: salesData.trend,
                    borderColor: "#007BFF",
                    borderWidth: 2,
                    fill: false
                }]
            },
            options: { responsive: true, maintainAspectRatio: false }
        });

        // Generate Price Chart
        const priceCtx = document.getElementById("priceChart").getContext("2d");
        if (priceChartInstance) priceChartInstance.destroy(); // Destroy previous instance
        priceChartInstance = new Chart(priceCtx, {
            type: "line",
            data: {
                labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
                datasets: [{
                    label: "Price Trend",
                    data: priceData.trend,
                    borderColor: "#28A745",
                    borderWidth: 2,
                    fill: false
                }]
            },
            options: { responsive: true, maintainAspectRatio: false }
        });
    };
});
