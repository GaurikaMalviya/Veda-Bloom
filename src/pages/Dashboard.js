import React, { useState } from 'react';
import Calendar from 'react-calendar';
import SymptomModal from '../components/SymptomModal';
import '../Calendar.css';

export default function Dashboard() {
  const [date, setDate] = useState(new Date());
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [loggedData, setLoggedData] = useState({});

  const openModal = (date) => {
    setSelectedDate(date);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedDate(null);
  };

  const handleSaveSymptoms = (data) => {
    const dateString = selectedDate.toDateString();
    setLoggedData(prev => ({ ...prev, [dateString]: data }));
  };

  return (
    <div className="bg-gray-100 min-h-screen pt-16">
      <div className="max-w-4xl mx-auto p-4 md:p-8">
        <h1 className="text-4xl font-bold text-brand-red mb-6">Track Your Cycle</h1>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <p className="text-lg text-gray-600 mb-4">Click on a date to log your symptoms and mood.</p>
          <Calendar onChange={setDate} value={date} onClickDay={openModal} className="border-0" />
        </div>

        {Object.keys(loggedData).length > 0 && (
          <div className="mt-8 bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-brand-red mb-4">Symptom Log Summary</h2>
            <ul className="space-y-2">
              {Object.entries(loggedData).map(([date, data]) => (
                <li key={date} className="text-gray-700">
                  <strong className="text-gray-900">{date}:</strong> 
                  {data.mood && ` Mood - ${data.mood}. `}
                  {data.symptoms.length > 0 && `Symptoms - ${data.symptoms.join(', ')}.`}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {selectedDate && (
        <SymptomModal isOpen={isModalOpen} onRequestClose={closeModal} onSave={handleSaveSymptoms} date={selectedDate} />
      )}
    </div>
  );
}