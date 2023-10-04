import React from 'react';

function MissionDetails({ mission }) {
    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">{mission.name}</h1>
            <p className="mb-4">{mission.description}</p>
            <div className="flex flex-wrap mb-4">
                <div className="w-full md:w-1/2 lg:w-1/3 p-2">
                    <h2 className="text-lg font-bold mb-2">Location</h2>
                    <p>{mission.location}</p>
                </div>
                <div className="w-full md:w-1/2 lg:w-1/3 p-2">
                    <h2 className="text-lg font-bold mb-2">Date</h2>
                    <p>{mission.date}</p>
                </div>
                <div className="w-full md:w-1/2 lg:w-1/3 p-2">
                    <h2 className="text-lg font-bold mb-2">Duration</h2>
                    <p>{mission.duration}</p>
                </div>
            </div>
            <div className="mb-4">
                <h2 className="text-lg font-bold mb-2">Requirements</h2>
                <ul className="list-disc pl-4">
                    {mission.requirements.map((requirement, index) => (
                        <li key={index}>{requirement}</li>
                    ))}
                </ul>
            </div>
            <div>
                <h2 className="text-lg font-bold mb-2">Contact</h2>
                <p>{mission.contactName}</p>
                <p>{mission.contactEmail}</p>
                <p>{mission.contactPhone}</p>
            </div>
        </div>
    );
}

export default MissionDetails;