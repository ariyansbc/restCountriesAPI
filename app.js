    fetch("https://restcountries.eu/rest/v2/all")
    .then(res => res.json())
    .then(data => disPlayCountries(data))

const disPlayCountries = countries => {
    const countriesDivId = document.getElementById("countries")
    console.log(countries);
     countries.forEach(country => {
         
        const countryDiv = document.createElement("div"); //created a div
        countryDiv.className = 'country';
        const countryInfo = `
           <h3 class="country-name">${country.name}</h3>
           <p>${country.capital}</p>
           <button onclick="getCountryDetails('${country.name}')">info</button>

         `;

         countryDiv.innerHTML = countryInfo;
         countriesDivId.appendChild(countryDiv)

     })
    }

const getCountryDetails = countryDetails => {
    const url = `https://restcountries.eu/rest/v2/name/${countryDetails }`;
    fetch(url)
    .then(res => res.json())
    .then(data => {
        disPlayCountriesDetails(data[0]);
    })
    // console.log(url);
}
const disPlayCountriesDetails = details => {
    const countryDetails = document.getElementById("country-details");
    const countryDetailsDiv = document.createElement('div');
    countryDetails.innerHTML = "";
    const detailsInfo = `
       <img src="${details.flag}">
       <h2>CountryName: ${details.name}</h2>
       <h2>Region: ${details.region}</h2>
       <h2>Area: ${details.area}</h2>
        <h4>Population: ${details.population}</h4>
         
     
  
    `;
    countryDetailsDiv.innerHTML = detailsInfo ;
    countryDetails.appendChild(countryDetailsDiv);

    console.log(details);
}