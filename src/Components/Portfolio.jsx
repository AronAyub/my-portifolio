/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/portifolioa.jpg";

const imageAltText = "my modified potifolio image";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Twiga Foods Precision Agri Project",
    description: "Project lead and solution deployment for Twiga foods corporate project",
    url: "https://www.linkedin.com/posts/liquid-intelligent-technologies_liquidintelligenttechnologies-casestudy-smartagriculture-activity-7042177700622417920-vBDO?utm_source=share&utm_medium=member_desktop",
  },
  {
    title: "Azure IoT ft Raspberry Pi & DHT 🎉",
    description:
      "Free 1 hour on Building end-to-end IoT Solutions Using Raspberry Pi and Azure cloud.",
    url: "https://www.youtube.com/watch?v=RzXs5oEY_lc",
  },
  {
    title: "Azure IoT Hub and ESP32",
    description: "Streaming real-time data on IoT Hub using ESP32 and DHT sensor",
    url: "https://sstechsolutioncom.wordpress.com/iot/iot-hub-esp32-dht11/",
  },
  {
    title: "Automate your Home/City using Raspberry-pi and MQTT",
    description:
      "How to use MQTT protocol to automate your home, get to understand the concept of subscriber-publisher, topics, client, and how MQTT works.",
    url: "https://medium.com/@aronayub/build-iot-solutions-using-mqtt-and-raspberry-pi-5dfc5256e3cf",
  },
  {
    title: "IEEE Sigfox - Azure Publications ",
    description:
      "See my published paper on IEEE based on a power outage product that utlizes; Sigfox, Circuit design, Azure IoT central, device bridge & Power automate.",
    url: "https://ieeexplore.ieee.org/document/9543444",
  },
  {
    title: "Microsoft Imagine Cup 2021 World finalist !",
    description: "Search for Intellivolt in the page.",
    url: "https://techcommunity.microsoft.com/t5/student-developer-blog/meet-the-2021-imagine-cup-world-finalists/ba-p/2171758",
  },
  {
    title: "My Youtube Channel",
    description:
      "This is my personal Youtube channel, meant to help everyone anyhow access the technology",
    url: "https://www.youtube.com/@AronAyub/videos",
  },
  {
    title: "Real time data stream on Power Bi",
    description: "Learn how to stream real time data using Stream analytics and Power Bi",
    url: "https://youtu.be/EU9J2E8mctw",
  },
  {
    title: "Human-Wildlife Conflict Solution",
    description:
      "See a solution/product I built on solving Elephant human Confilct along their corridors",
    url: "https://github.com/AronAyub/Human-Wildlife-Conflict---Elephant-Chasing",
  },
  {
    title: "Connect",
    description: "Click Icons in the contact section to check my Socials",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
