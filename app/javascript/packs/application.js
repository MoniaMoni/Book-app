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

document.addEventListener('turbolinks:load', () => {

    var ctx = document.getElementById('myChart');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: [
                "Rosemary Sutcliff",
                "New Title",
                "The Skull Beneath the Skin",
                "Pale Kings and Princes",
                "3",
                "The Wives of Bath"
            ],
            datasets: [
                {
                    label: "Books",
                    data: [
                        3,
                        2,
                        2,
                        2,
                        2,
                        2
                    ],
                    backgroundColor: "#1f77b4",
                    borderColor: "#1f77b4"
                }
            ],
            options: {
                scales: {
                    xAxes: [
                        {
                            gridLines: {
                                display: false
                            },
                            barPercentage: 0.9,
                            categoryPercentage: 0.9,
                            scaleLabel: {
                                display: true,
                                labelString: "Title"
                            }
                        }
                    ],
                    yAxes: [
                        {
                            ticks: {
                                beginAtZero: true
                            },
                            scaleLabel: {
                                display: true,
                                labelString: "Books"
                            }
                        }
                    ]
                },
                legend: {
                    labels: {
                        usePointStyle: true
                    }
                },
                maintainAspectRatio: false,
                tooltips: {
                    xPadding: 8,
                    yPadding: 7
                }
            }
        }
    })
})

