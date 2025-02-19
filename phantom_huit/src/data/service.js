export const services = [
    {
      id: 'medical-supplies',
      title: "Medical Supplies",
      description: "Providing top-quality medical equipment and training to support healthcare excellence.",
      features: [
        "Theatre Equipment",
        "Laboratory Machinery",
        "Hospital Attire",
        "Medication and Reagents"
      ],
      imageUrl: '/pictures/medicalsipply1.webp',
      fullDescription: `Phantom-Huit Investments Limited supplies a comprehensive range of medical products and services to healthcare facilities, ensuring they are equipped with essential theater equipment, laboratory machinery, reagents, hospital attire, and medications. They provide not only high-quality supplies but also long-term maintenance services, offering up to 20 years of free servicing for equipment purchased. In addition to this, Phantom-Huit organizes and supports community health initiatives, including mass medical camps and disaster management programs that focus on health monitoring and preventive care. Their commitment to quality is reinforced through strict adherence to KEBS and international quality standards, making them a reliable partner for healthcare providers.`
    },
    {
      id: 'it-security',
      title: "IT and Security Solutions",
      description: "Delivering reliable IT systems and advanced security solutions for complete protection.",
      features: [
        "Computer Hardware and Accessories",
        "CCTV Installations",
        "Remote Monitoring",
        "Motion Detection Systems"
      ],
      imageUrl: '/pictures/itsolution.jpg',
      fullDescription: `As an agent for leading technology brands like Compaq, Dell, and HP, Phantom-Huit supplies high-quality computer equipment and accessories to meet the technological needs of modern businesses. Their offerings include laptops, desktops, printers, UPS systems for power stability, as well as digital devices like GPS units, cell phones, and digital cameras. In addition to hardware, Phantom-Huit provides essential software packages, enhancing productivity and security for clients across different sectors. Each product is carefully selected to provide reliable, durable solutions that support businesses in maintaining efficient and effective operations.`
    },
    {
      id: 'stationery',
      title: "Stationery and Office Supplies",
      description: "Complete range of high-quality office and stationery supplies meeting global safety standards.",
      features: [
        "Writing Materials",
        "Paper Products and Forms",
        "Filing Solutions",
        "Adhesives and Packaging Materials"
      ],
      imageUrl: '/pictures/stationery.webp',
      fullDescription: `Phantom-Huit offers a wide variety of stationery and office supplies that meet stringent quality and safety standards, making them suitable for both business and educational environments. Their selection includes writing tools like pens, pencils, and markers, as well as paper products, file organizers, envelopes, and adhesives. With an emphasis on quality control, Phantom-Huit ensures that all products are compliant with international standards, giving clients confidence in the safety and reliability of their supplies. These products are designed to support efficient daily operations, organization, and documentation for any professional setting.`
    },
    {
      id: 'construction',
      title: "Construction and Engineering",
      description: "Expert construction services from design to maintenance for all types of buildings.",
      features: [
        "Building Design",
        "Construction Management",
        "Maintenance Services",
        "School Construction Projects"
      ],
      imageUrl: '/pictures/Construction.jpg',
      fullDescription: `Phantom-Huit provides complete construction services, from initial design and planning to construction management and maintenance. They cater to diverse projects, including residential homes, commercial offices, schools, hospitals, and sports centers, with specialized expertise in building systems such as HVAC, electrical installations, and fire safety. Their services cover structural design, project management, and renovation, with careful attention to client specifications and regulatory compliance. Whether building new structures or maintaining existing ones, Phantom-Huit delivers high standards of quality and reliability across all stages of construction.`
    },
    {
      id: 'electrical',
      title: "Electrical Services",
      description: "Professional electrical solutions for domestic, commercial, and industrial clients.",
      features: [
        "Electrical Installations",
        "Data Services",
        "Maintenance and Repairs",
        "Licensed Professional Team"
      ],
      imageUrl: '/pictures/electrical.webp',
      fullDescription: `Phantom-Huit offers a range of electrical and data services for residential, commercial, and industrial clients, with fully licensed and experienced electricians. Their services cover everything from basic wiring and lighting installation to complex data cabling and electrical repairs. With a commitment to up-to-date training and safety compliance, Phantom-Huit ensures all installations are secure and efficient, tailored to meet the specific power and data needs of each client. Their robust inventory and skilled team allow them to provide prompt and effective solutions for any electrical requirement.`
    },
    // {
    //   id: 'uniforms',
    //   title: "Custom Uniforms and Sports Equipment",
    //   description: "Specialized clothing and equipment solutions for various institutional needs.",
    //   features: [
    //     "Custom Uniforms",
    //     "Sports Equipment",
    //     "Professional Garments",
    //     "Quality Materials"
    //   ],
    //   imageUrl: '/pictures/phantomPic.jpg',
    //   fullDescription: `Phantom-Huit designs and supplies custom uniforms, garments, and sports equipment to meet the specific needs of clients in sectors like corporate, education, and sports. They offer durable, high-quality uniforms that align with branding requirements, providing a consistent and professional appearance for employees and students alike. Additionally, they supply custom sportswear and equipment, supporting teams and schools with reliable, well-made products. By focusing on customization and durability, Phantom-Huit ensures that each garment and piece of equipment not only meets aesthetic needs but also provides comfort and longevity.`
    // }
  ];
  
  export const getServiceById = (id) => {
    return services.find(service => service.id === id);
  };