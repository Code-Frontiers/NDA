import React from "react";

const services = [
    {
        icon: "desktop-outline",
        title: "Web Design",
        description:
            "“It is not because things are difficult that we do not dare; it is because we do not dare that they are difficult.”",
    },
    {
        icon: "logo-react",
        title: "Web Development",
        description:
            "“It is not because things are difficult that we do not dare; it is because we do not dare that they are difficult.”",
    },
    {
        icon: "camera-outline",
        title: "Photography",
        description:
            "“It is not because things are difficult that we do not dare; it is because we do not dare that they are difficult.”",
    },
    {
        icon: "cut-outline",
        title: "Clipping Path",
        description:
            "“It is not because things are difficult that we do not dare; it is because we do not dare that they are difficult.”",
    },
    {
        icon: "phone-portrait-outline",
        title: "Apps Interface",
        description:
            "“It is not because things are difficult that we do not dare; it is because we do not dare that they are difficult.”",
    },
    {
        icon: "brush-outline",
        title: "Graphic Design",
        description:
            "“It is not because things are difficult that we do not dare; it is because we do not dare that they are difficult.”",
    },
];

const Services = () => {
    return (
        <section className="service-section">
            <p className="section-description">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem ex dolores
                tempore possimus, mollitia vero quas.
            </p>
            <div className="service-grid">
                {services.map((service, index) => (
                    <div key={index} className="service-box">
                        <ion-icon className="service-icon" name={service.icon}></ion-icon>
                        <h3 className="service-title">{service.title}</h3>
                        <p className="service-description">{service.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Services;
