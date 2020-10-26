
function Property(title, bedrooms, bathrooms, price, area, imageUrl, description, parking){
    this.title = title;
    this.bedrooms = bedrooms;
    this.bathrooms = bathrooms;
    this.price = price;
    this.area = area;
    this.imageUrl = imageUrl;
    this.description = description;
    this.parking = parking;
}

function saveProperty() {

    var title = $("#txtTitle").val();
    var bedrooms = parseInt($("#txtBedrooms").val());
    var bathrooms = parseInt($("#txtBathrooms").val());
    var price = parseFloat($("#txtPrice").val());
    var area = parseInt($("#txtArea").val());
    var imageUrl = $("#txtImage").val();
    var description = $("#txtDescription").val();
    var parking = $("#radio_0").is(":checked");

    if(!price) {
        alert("Error, verify the price");
        return;
    }

    if(!bedrooms) {
        alert("Error, verify the Bedrooms");
        return;
    }

    var prop = new Property(title, bedrooms, bathrooms, price, area, imageUrl, description, parking);
    console.log(prop);

    

    $.ajax({
        url:"/catalog/saveProperty",
        type: "POST",
        data:JSON.stringify(prop),
        contentType: "application/json",
        success: (res) => {
            console.log(res);
            
            $(".form-control").val('');

            //show a message
        },
        error: (details) => {
            console.log("Error", details);

            //show an error
        }
    });

}


 
function init() {
    console.log("Register Page");

    $("#btnSave").click(saveProperty);

}


window.onload = init;