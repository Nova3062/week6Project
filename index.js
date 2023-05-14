

//const url: 

const url = 'https://6298beb2f2decf5bb74a9edb.mockapi.io/vehicle'

let vehicles = []; //put info from api here 

//function to fetch information/data from api

async function getVehicles (){
    console.log('Inside getVehicles')

    try {
            //fetch request to get info from mock api 
        const response = await fetch(url); // response with info such as...
            console.log("response from api: ", response)//logging response 
    

            const dataFromApi = await response.json();
            console.table(dataFromApi);

        // for each vehicle push to vihicles array
        dataFromApi.forEach(vehicle =>  {
            vehicles.push(vehicle);
        })
            console.table(vehicles);

            //functions calls
            console.table(filterByType('Hatchback'));
            console.table(filter.filterByManufacturer('Jeep'));
        } catch (error)  {
        console.log(error);

    }
} 
//create a fucntion that filters vehicles array and pushes vehcles by 
//type 'sedan' and stores in an array 
function filterByType(searchTerm){ //place holder fro argument 
    return vehicles.filter(vehicle => vehicle.type === searchTerm );

}
function filterByManufacturer(searchTerm){
    return vehicles.filter(vehicle => vehicle.manufacturer  === searchTerm);
}


getVehicles();//fucntion.call 
