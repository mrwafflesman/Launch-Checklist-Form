// Write your JavaScript code here!

window.addEventListener('load', function(){
   let form = document.querySelector('form');
   let selector = Math.floor(Math.random()*6)

      fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response){
         response.json().then(function(json){
            const div = document.getElementById("missionTarget")
            div.innerHTML = `
               <h2>Mission Destination</h2>
                  <ol>
                     <li>Name: ${json[selector].name}</li>
                     <li>Diameter: ${json[selector.diameter]}</li>
                     <li>Star: ${json[selector].star}</li>
                     <li>Distance from Earth: ${json[selector].distance}</li>
                     <li>Number of Moons: ${json[selector].moons}</li>
                  </ol>
                  <img src="${json[selector].image}">`
         })
      })
   form.addEventListener('submit', function(){
      let pilotName = document.querySelector("input[name=pilotName]");
      let copilotName = document.querySelector("input[name=copilotName]")
      let fuelLevel = document.querySelector("input[name=fuelLevel]")
      let cargoMass = document.querySelector("input[name=cargoMass]")

      let pilotStatus = document.getElementById("pilotStatus")
      let copilotStatus = document.getElementById("copilotStatus")
      let fuelStatus = document.getElementById("fuelStatus")
      let cargoStatus = document.getElementById("cargoStatus")
      let faultyItems = document.querySelector("#faultyItems")
      let launchStatus = document.getElementById("launchStatus")

      if (pilotName.value === '' || copilotName.value === '' || fuelLevel.value === '' || cargoMass.value === '') {
         window.alert("All fields must be filled.")
         event.preventDefault();
      } else {
         
         if (Number(fuelLevel.value) < 10000) {
            faultyItems.style.visibility = "visible"
            fuelStatus.innerHTML = "Insufficient fuel"
            launchStatus.innerHTML = "Shuttle not ready for launch"
            launchStatus.style.color = "red"
            event.preventDefault();
         } else if (Number(cargoMass.value) > 10000) {
            faultyItems.style.visibility = "visible"
            cargoStatus.innerHTML = "Too much mass for liftoff"
            launchStatus.innerHTML = "Shuttle not ready for launch"
            launchStatus.style.color = "red"
            event.preventDefault();
         } else {
            faultyItems.style.visibility = "visible"
            pilotStatus.innerHTML = `Pilot ${pilotName.value} ready for launch`
            copilotStatus.innerHTML = `Co-pilot ${copilotName.value} ready for launch`
            fuelStatus.innerHTML = "Fuel level high enough for launch"
            cargoStatus.innerHTML = "Cargo mass low enough for launch"
            launchStatus.innerHTML = "Shuttle ready for launch"
            launchStatus.style.color = "green"
            event.preventDefault();
         }
      }
      
   })
})
