function payNow() {

    var options = {
        key: "YOUR_RAZORPAY_KEY_ID", // Replace with your Razorpay Test Key ID

        amount: 50000, // ₹500 (Razorpay uses paise)
        currency: "INR",

        name: "Pahredar Foundation",
        description: "Donation to Pahredar Foundation",

        handler: function (response) {
            alert(
                "Thank you for your donation!\n\nPayment ID: " +
                response.razorpay_payment_id
            );
        },

        theme: {
            color: "#2e7d32"
        }
    };

    var razorpay = new Razorpay(options);

    razorpay.on("payment.failed", function (response) {
        alert("Payment failed. Please try again.");
    });

    razorpay.open();
}