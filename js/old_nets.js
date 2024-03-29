function createPartnerOptions() {
    var partnerSelector = d3.select("#partner-name"); //SELECT <select> WHERE PARTNER NAMES WILL APPEAR
    d3.json('./static/partner_id.json').then((partners) => { //READ IN JSON FILE COINTAING ALL PARTNER'S NAMES
        console.log(partners);
        var southTexasPartners = Object.values(partners.partner_name) //EMPTY ARRAY TO CONTAIN ALL PARTNER'S NAME (REPEATED)
        //console.log(southTexasPartners);
        southTexasPartners.forEach((partner) =>{
            //console.log(partner)
            partnerSelector
            .append('option')
            .text(partner)
            .property('Value', partner);
        })
        //document.getElementById("partner-name").size = southTexasPartners.length + 1 //SELECT PARTER <select> AND MAKE IT THE SIZE OF THE LENGTH OF THE PARTNER'S LIST
    })
}; //END OF createOptions()

createPartnerOptions() //CALL FUNCTION TO CREATE PARTNER'S NAME AS SOON AS THE PAGE LOADS



function createCurves() {
    var dropdownMenu = document.getElementById("partner-name").selectedOptions; //MAKE SELECTED PARTNER NAME INTO A var
    values = Array.from(dropdownMenu).map(({ value }) => value); //SELECTED PARTNER INTO ARRAY
    console.log(values); //SELECTED PARTNER
   
   
    d3.json('./static/ownership-oil.json').then((oilOwnership) => {
        console.log(Object.getOwnPropertyNames(oilOwnership[0]));
        
        //READ IN .json CONTAINING PARTNER'S WELL AND INTEREST INFO
        var dates = [];
        var oil =[];
        var gas = [];
        oilOwnership.forEach((oilDay) => { //LOOP THROUGH  ROW OF DATA (interest)
            //console.log(oilDay);
            if (oilDay.hasOwnProperty(values)) {
               
                dates.push(oilDay.Date)
                oil.push(oilDay[values]) //THIS DOES NOT WORK
            }; 
         }); //CLOSE interest LOOP
         console.log(dates)
         console.log(oil)

         




        // Object.values(wellOptions).forEach(function(value) { //LOOP THROUGH WELL_ID:WELL_NAME VALUES TO APPEND WELL NAME TO "well-options" (wells partner in)
        //     //console.log(value);
        //     wellSelector //APPEND WELL_NAME TO well-options <select>
        //     .append('option')
        //     .text(value)
        //     .property('Value', value);
        // }); //END VALUES INTERATION
        // document.getElementById("well-options").size = partners.length + 1 ////SET THE SIZE OF THE well-options <select> TO THE LEGTH OF THE wellOptions VALUE length
        //console.log(interestDataRelevantToPartner)
        //console.log(wellOptions);
        //console.log(wellIntersts);
    // });
        
//var newData = [] //PRODUCTION DATA ONLY RELEVANT TO SELECTED PARTNER
//var netOilProductionForWell = []; //CONTAINS EACH WELLS DAILY OIL NET PRODUCTION OWNED 

//var netGasProductionForWell = []; //CONTAINS EACH WELLS DAILY GAS NET PRODUCTION OWNED 
//var allGasNetsAdded = []; //COINTAINS DAILY GAS SUM 
//var all_dates = []
//console.log(wellIntersts);

//CREATING PRODUCTION DATA SET RELEVANT TO SELECTED PARTNER (COINTAINS DATA ONLY FOR THE WELLS THEY ARE IN)
// {d3.json("./static/data.json").then((data) =>{
//     data.forEach((site) => 
//     {if(wellIntersts.hasOwnProperty(site[0]))
//         {newData.push(site);
//         all_dates.push(site[2])
//     }}
//     );
//    // console.log(newData); //CHECK THAT ONLY THEIR RELEVANT DATA IS BEING STORED IN newData
//   //console.log("all_dates", all_dates)

//     //debugger;

//     //FOR EACH POINT IN new_data, x[0] HAS THE WELL NAME FROM  partnersWellAndInterest (THE OBJECT CONTAINING wellName:wellInterest), THEN netOilProductionForWell = THE production  x[2] * partnersInterest[x[0]] (property name [WELL NAME][0]), WHICH IS THE INTEREST FOR THAT WELL 
//     newData.forEach((x) => 
//     {if(wellIntersts.hasOwnProperty(x[0]))
//         {
//             netOilProductionForWell = newData.map(x => x[3] * wellIntersts[x[0]]);
//             netGasProductionForWell = newData.map(x => x[4] * wellIntersts[x[0]])} //SITE[2]*DESIGNATED INTEREST
//         });
//         //console.log("netOilProductionForWell", netOilProductionForWell);
        
//         //zip all_dates to each netOilProductionForWell for that date (dates  are repeated at this point, need to add all wells for date)
//         var oilReadyToAddList = _.zip(all_dates, netOilProductionForWell);
       
        
//        var groupedDays = _.groupBy(oilReadyToAddList, "0");
//      //  console.log(groupedDays); //not an array

//        //console.log((typeof groupedDays))


      
//        ///TEST///
//       //console.log(Object.values(groupedDays))
//       Object.values(groupedDays).forEach((day1) =>
//       {day1.forEach((well1) => {
//           //delete well1["0"];
//           well1.splice(0,1).flat();
//         //console.log(well1.splice(1,1));
//         //console.log(well1);
//        // console.log(Object.getOwnPropertyNames(well1));
//     }
//         )});

//         //console.log(("groupedDays", groupedDays))
//         flattenDays = [];
        
//         const reducer = (accumulator, currentValue) => accumulator + currentValue;
//         Object.values(groupedDays).forEach(x => 
//             {
//                 //console.log("flat", x.flat(1));
//                 var y = x.flat(1);

//                 //console.log(x);
//                 flattenDays.push(y);
//             }
//             );
//             //console.log(groupedDays); // NOT FLAT
//             //console.log(flattenDays); //FLATTEN


//     var addedDays= flattenDays.map(x => x.reduce(reducer))
//     //console.log("HERE", addedDays)

// //console.log(addedDays);

//             var site_date = [...new Set(all_dates)];

//             //console.log(site_date);

//            var pairedOilAndDates =  _.object(site_date, addedDays);

         //  console.log(pairedOilAndDates); /// GOT IT
           //console.log("site_date",site_date);
   

    var mostRecentEntry = site_date[0]; //MOST RECENT DATE WITHOUT HOUR AS VARIABLE
           // console.log("mostRecentEntry", mostRecentEntry);
            var mostRecentDate = new Date(mostRecentEntry) //MAKE MOST RECENT ENTRY A DATE
            //var mostRecentDate = new Date(nextYear); //MAKE VARIABLE INTO DATE
            //console.log("mostRecentDate", mostRecentDate);
            var nextYearsDate = new Date(mostRecentDate.setFullYear(mostRecentDate.getFullYear() + 1)); //GET YEAR FROM MOST RECENT DATE AND ADD A YEAR
            var nextYear= nextYearsDate.getFullYear() //GET NEXT YEARS DATE
            var nextMonth= nextYearsDate.getMonth() + 1 // GET NEXTS YEARS MONTH, ADD ONE BECAUSE MONTHS ARE INDEXED AT 0
            var nextDate= nextYearsDate.getDate() //GET NEXT YEARS DATE
            nextYearGraph = `${nextYear}/${nextMonth}/${nextDate}`; // CREATE FULL DATE FOR NEXT YEAR IN RIGHT FORMAT FOR AXIS
           // console.log(`${nextYearGraph} is a year from the most recent production date. This is from curvesHome()`);
  
            var dataOil = [{
                x: dates,
                y: oil,
                type: "line",
                line:
                    {color: "green"}}];
            var layoutOil = {
                title: "Oil BBL"
                ,
                yaxis: {
                    title: "BOPD Net"
                     ,
                    // type: 'log',
                     //autorange: true
                }
                 ,
                 xaxis: {
                     //autorange: false,
                     range: [site_date[site_date.length-1], nextYearGraph]
                 }
            };
  
            Plotly.newPlot("oilDeclineCurve", dataOil, layoutOil);
            var dataGas = [{
                x: site_date,
                y: allGasNetsAdded,
                type: "line",
                line:
                    {color: "red"}}];
            var layoutGas = {
                title: "Gas BBL",
                yaxis: {
                    title: "MCFD Net",
                    type: 'log',
                    autorange: true},
                xaxis: {
                    autorange: false,
                    range: [site_date[site_date.length-1], nextYearGraph]}};
            Plotly.newPlot("gasDeclineCurve", dataGas, layoutGas);

        })};

    
        
        
      
    document.getElementById("partner-name").addEventListener("change", clearWellOptions) //WHEN THE SELECTION ON PARTNERS CHANGES, CLEAR OUT THE WELL OPTIONS
    document.getElementById("partner-name").addEventListener("change", clearCurves) //WHEN THE SELECTION ON PARTNERS CHANGES, CLEAR OUT THE CURVES
// });
; //END OF createOptions() 



d3.select("#partner-name").on('change', createCurves); //WHEN THERE IS A CHANGE IN THE PARTNERS SELECT, CREATE WELL OPTIONS FOR THAT PARTNER

function clearWellOptions(){ //FUNCTION TO CLEAR OUT WELL OPTIONS, USED WHEN PARTNER SELECTION IS CHANGED
    document.getElementById("well-options").options.length = 0
 };

 function clearCurves(){ //MAKE THIS INTO DISAPPEARING THE CURVES?
    var site_oil = [];
    var site_gas = [];
    site_date = [];
    
    var dataOil = [{
        x: site_date,
        y: site_oil,
        type: "line",
        line:
            {color: "green"}}];
    var layoutOil = {
        title: "Oil BBL",
        yaxis: {
            type: 'log'}};
        Plotly.newPlot("oilDeclineCurve", dataOil, layoutOil);


    var dataGas = [{
        x: site_date,            
        y: site_gas,
        type: "line",
        line:
            {color: "red"}}];
    var layoutGas = {
        title: "Gas BBL",
        yaxis: {
            type: 'log'}};
    Plotly.newPlot("gasDeclineCurve", dataGas, layoutGas);
};
