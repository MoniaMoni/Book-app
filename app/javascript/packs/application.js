// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//= require jquery

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")

require("chartkick")

//= require reports_kit/application
//= require_tree
// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)

const Chart = require('chart.js')

// document.addEventListener('turbolinks:load', () => {
//
//     var ctx = document.getElementById('myChart');
//     var myChart = new Chart(ctx, {
//         type: 'bar',
//         data: {
//             labels: [
//                 "Rosemary Sutcliff",
//                 "New Title",
//                 "The Skull Beneath the Skin",
//                 "Pale Kings and Princes",
//                 "3",
//                 "The Wives of Bath"
//             ],
//             datasets: [
//                 {
//                     label: "Books",
//                     data: [
//                         4,
//                         5,
//                         2,
//                         5,
//                         1,
//                         8
//                     ],
//                     backgroundColor: "#1f77b4",
//                     borderColor: "#1f77b4"
//
//                 }
//             ],
//
//             options: {
//                 scales: {
//                     xAxes: [
//                         {
//                             gridLines: {
//                                 display: false
//                             },
//                             barPercentage: 0.9,
//                             categoryPercentage: 0.9,
//                             scaleLabel: {
//                                 display: true,
//                                 labelString: "Title"
//                             }
//                         }
//                     ],
//
//                 },
//                 legend: {
//                     labels: {
//                         usePointStyle: true
//                     }
//                 },
//                 maintainAspectRatio: false,
//                 tooltips: {
//                     xPadding: 8,
//                     yPadding: 7
//                 }
//             }
//         }
//     })
// })

// document.addEventListener('turbolinks:load', () => {
//     var ctx = document.getElementById('myChart1');
//     var myChart = new Chart(ctx, {
//         type: 'bar',
//         data: {
//             "labels": [
//                 "Jan 21, '21",
//                 "Jan 22, '21",
//                 "Jan 23, '21",
//                 "Jan 24, '21",
//                 "Jan 25, '21",
//                 "Jan 26, '21",
//                 "Jan 27, '21",
//                 "Jan 28, '21",
//             ],
//             "datasets": [
//                 {
//                     "label": "Romance",
//                     "data": [
//                         21,
//                         9,
//                         0,
//                         3,
//                         5,
//                         0,
//                         0,
//                         6
//                     ],
//                     "backgroundColor": "#1f77b4",
//                     "borderColor": "#1f77b4"
//                 },
//                 {
//                     "label": "Thriller",
//                     "data": [
//                         18,
//                         3,
//                         0,
//                         3,
//                         2,
//                         0,
//                         0,
//                         8
//                     ],
//                     "backgroundColor": "#aec7e8",
//                     "borderColor": "#aec7e8"
//                 },
//                 {
//                     "label": "Sci-Fi",
//                     "data": [
//                         17,
//                         8,
//                         0,
//                         2,
//                         3,
//                         0,
//                         0,
//                         2
//                     ],
//                     "backgroundColor": "#ff7f0e",
//                     "borderColor": "#ff7f0e"
//                 },
//                 {
//                     "label": "Contemporary",
//                     "data": [
//                         16,
//                         6,
//                         0,
//                         4,
//                         2,
//                         0,
//                         0,
//                         3
//                     ],
//                     "backgroundColor": "#ffbb78",
//                     "borderColor": "#ffbb78"
//                 },
//                 {
//                     "label": "Westerns",
//                     "data": [
//                         15,
//                         2,
//                         0,
//                         1,
//                         4,
//                         0,
//                         0,
//                         6
//                     ],
//                     "backgroundColor": "#2ca02c",
//                     "borderColor": "#2ca02c"
//                 },
//                 {
//                     "label": "Mystery",
//                     "data": [
//                         12,
//                         5,
//                         0,
//                         1,
//                         4,
//                         0,
//                         0,
//                         4
//                     ],
//                     "backgroundColor": "#98df8a",
//                     "borderColor": "#98df8a"
//                 },
//                 {
//                     "label": "Fantasy",
//                     "data": [
//                         15,
//                         5,
//                         0,
//                         1,
//                         1,
//                         0,
//                         0,
//                         4
//                     ],
//                     "backgroundColor": "#d62728",
//                     "borderColor": "#d62728"
//                 }
//         ],
//
//         options: {
//             scales: {
//                 xAxes: [
//                     {
//                         gridLines: {
//                             display: false
//                         },
//                         barPercentage: 0.9,
//                         categoryPercentage: 0.9,
//                         scaleLabel: {
//                             display: true,
//                             labelString: "Title"
//                         }
//                     }
//                 ],
//
//             },
//             legend: {
//                 labels: {
//                     usePointStyle: true
//                 }
//             },
//             maintainAspectRatio: false,
//             tooltips: {
//                 xPadding: 8,
//                 yPadding: 7
//             }
//         }
//     }
// })
// })

function count_down(temp) {
    $('#countdown').countdown(temp)
    console.log(temp)
}


document.addEventListener('turbolinks:load', () => {
    const ctx = document.getElementById('myChart');
    // $dane = data('temp')
    // console.log($dane);

var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        "labels":["Jan 21, '21", "Jan 22, '21", "Jan 23, '21", "Jan 24, '21", "Jan 25, '21", "Jan 26, '21", "Jan 27, '21", "Jan 28, '21", "Jan 29, '21"], "datasets":[{"label":"Romance", "data":[21, 9, 0, 3, 5, 0, 0, 6, 4], "backgroundColor":"#1f77b4", "borderColor":"#1f77b4"}, {"label":"Contemporary", "data":[16, 6, 0, 4, 2, 0, 0, 3, 3], "backgroundColor":"#aec7e8", "borderColor":"#aec7e8"}, {"label":"Thriller", "data":[18, 3, 0, 3, 2, 0, 0, 8, 0], "backgroundColor":"#ff7f0e", "borderColor":"#ff7f0e"}, {"label":"Sci-Fi", "data":[17, 8, 0, 2, 3, 0, 0, 2, 1], "backgroundColor":"#ffbb78", "borderColor":"#ffbb78"}, {"label":"Westerns", "data":[15, 2, 0, 1, 4, 0, 0, 6, 2], "backgroundColor":"#2ca02c", "borderColor":"#2ca02c"}, {"label":"Mystery", "data":[12, 5, 0, 1, 4, 0, 0, 4, 2], "backgroundColor":"#98df8a", "borderColor":"#98df8a"}, {"label":"Fantasy", "data":[15, 5, 0, 1, 1, 0, 0, 4, 1], "backgroundColor":"#d62728", "borderColor":"#d62728"}], "options":{"scales":{"xAxes":[{"gridLines":{"display":false}, "barPercentage":0.9, "categoryPercentage":0.9, "scaleLabel":{"display":true, "labelString":"Created At"}}], "yAxes":[{"ticks":{"beginAtZero":true}, "scaleLabel":{"display":true, "labelString":"Books"}}]}, "legend":{"labels":{"usePointStyle":true}}, "maintainAspectRatio":false, "tooltips":{"xPadding":8, "yPadding":7}
        }
    }
})
})