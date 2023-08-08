AFRAME.registerComponent("markerhandler",{
    init: async function(){
        this.el.addEventListener("markerFound",()=>{
            this.handleMarkerFound()
            console.log("marker is found")
        })
        this.el.addEventListener("markerLost",()=>{
            this.handleMarkerLost()
            console.log("marker is lost")
        })
    },
    handleMarkerFound: function(){
    var buttonDiv=document.getElementById("button-div")
    buttonDiv.style.display="flex"
    
    var buttonRating=document.getElementById("rating-button")
    var buttonOrder=document.getElementById("order-button")

    buttonRating.addEventListener("click",function (){
    swal({
        icon:"warning",
        title:"rate dish",
        text:"How was the dish?"
    })
})
    buttonOrder.addEventListener("click",()=>{
        swal({
            icon:"warning",
            title:"thanks for the order",
            text:"Dish inputed."
        })
    })
    },
    handleMarkerLost: function(){
    var button=document.getElementById("button-div")
    button.style.display="none"
    
    }
})
