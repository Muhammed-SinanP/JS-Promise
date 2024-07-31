// 1.Create a function fetchData that returns a Promise.
// The Promise should resolve with the string "Data fetched successfully" after a delay of 2 seconds.
// Use setTimeout to simulate the delay.
// Test your function by calling it and using .then() to log the resolved value to the console.
{
  function fetchData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("1st Data fetched successfully");
      }, 2000);
    });
  }

  fetchData().then((data) => console.log(data));
}

// // 2.Modify the fetchData function from Question 1 to sometimes reject the Promise with an error message
// "Failed to fetch data".Modify your test to handle this rejection using .catch().
{
  function fetchData() {
    return new Promise((resolve, reject) => {
      const num = 2;
      if (num === 1) {
        resolve("2nd Resolved");
      } else {
        reject("2nd Failed to fetch data");
      }
    });
  }

  fetchData()
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
}

// 3. Convert the fetchData function from Question  1 to use async and await instead of .then().
// Ensure to handle errors using try and catch
{
  const p1 = new Promise((resolve, reject) => {
    const num = 2;
    if (num === 1) {
      resolve("3rd Resolved");
    } else {
      reject("3rd Failed to fetch data");
    }
  });

  async function fetchData() {
    try {
      const p1Status = await p1;
      console.log(p1Status);
    } catch (error) {
      console.log(error);
    }
  }

  fetchData();
}

// 4. Write a function "getCountryData" that fetches data from the public API
// " https://restcountries.com/v3.1/all ". Parse the JSON response and log the data to the console.
//  Additionally, use DOM manipulation to display the data on the web page. Make sure to handle any errors
//  that might occur during the fetch operation and display an appropriate error message in the div if the fetch fails.
//  (deploy the webpage on github)
{
  const display = document.getElementById("country");

  function clearDisplay() {
    display.innerHTML = "";
  }

  function getCountryData() {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Unable to fetch data");
        }

        return response.json();
      })
      .then((data) => {
        data.forEach((country) => {
          const name = country.name.common;
          const countryName = document.createElement("p");
          countryName.innerText = name;
          display.appendChild(countryName);

          const flag = country.flags.png;
          const countryFlag = document.createElement("img");
          countryFlag.src = flag;
          display.appendChild(countryFlag);

          const line = document.createElement("hr");
          display.appendChild(line);
        });
      })
      .catch((error) => {
        console.log(error);
        display.innerText = error;
      });
  }
}
