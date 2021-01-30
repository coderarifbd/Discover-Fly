
document.getElementById("economy-ticket-increase").addEventListener('click', function(){
    const ticketCount = ticketCounter("economy-input", true);
});

document.getElementById("economy-ticket-decrease").addEventListener('click', function(){
    ticketCounter("economy-input", false);
});

document.getElementById("firstClass-ticket-increase").addEventListener('click', function(){
    ticketCounter("firstClass-input", true);
});

document.getElementById("firstClass-ticket-decrease").addEventListener('click', function(){
    ticketCounter("firstClass-input", false);
});

// Ticket Increment Decrement
function ticketCounter(id, isIncrease){
    const ticketInput = document.getElementById(id);
    const ticketCount = parseInt(ticketInput.value);
    let ticketNewCount = ticketCount;
    if(isIncrease == true){
        ticketNewCount = ticketCount + 1;
    }
    if(isIncrease == false && ticketCount > 0){
        ticketNewCount = ticketCount - 1;
    }
    ticketInput.value = ticketNewCount;
    calculateTotal();
}

function calculateTotal(){
    const firstClassTicket = document.getElementById("firstClass-input");
    const firstTicketCount = parseInt(firstClassTicket.value);
    const firstClassTicketAmount = firstTicketCount * 150;

    const economyClassTicket = document.getElementById("economy-input");
    const economyTicketCount = parseInt(economyClassTicket.value);
    const economyClassTicketAmount = economyTicketCount * 100;
    const totalTicketAmount = firstClassTicketAmount + economyClassTicketAmount;

    document.getElementById("subtotal").innerText = totalTicketAmount;

    const vat = totalTicketAmount * 0.10;
    document.getElementById("vat").innerText = vat;

    const totalAmount = totalTicketAmount + vat;
    document.getElementById("total").innerText = totalAmount;
    
}
document.getElementById("book-now").addEventListener('click', function(){
    document.getElementById("booking-form").style.display = "none"
    document.getElementById("hidden").style.display = "block";
    bookNow();
})

function bookNow(){
    const flyingFrom = document.getElementById("flying-form").value;
    const flyingTo = document.getElementById("flying-to").value;
    const departureDate = document.getElementById("departure-date").value;
    const  returnDate = document.getElementById("return-date").value;
    const firstClassTicket = document.getElementById("firstClass-input").value;
    const economyClassTicket = document.getElementById("economy-input").value;
    const subtotal = document.getElementById("subtotal").innerText;
    const vat = document.getElementById("vat").innerText;
    const total = document.getElementById("total").innerText;

    document.getElementById("flying-from-invoice").innerText = flyingFrom;
    document.getElementById("flying-to-invoice").innerText = flyingTo;
    document.getElementById("departure-date-invoice").innerText = departureDate;
    document.getElementById("return-date-invoice").innerText = returnDate;
    document.getElementById("firstClass-seat-number").innerText = firstClassTicket;
    document.getElementById("economy-seat-number").innerText = economyClassTicket;
    document.getElementById("subtotal-amount").innerText = subtotal;
    document.getElementById("vat-amount").innerText = vat;
    document.getElementById("total-amount").innerText = total;
    console.log(subtotal);
}
