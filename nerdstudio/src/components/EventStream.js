import { useEffect, useState } from 'react';

const EventStream = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const eventSource = new EventSource('/v1/api/translates/generate_translate/');

    eventSource.onmessage = (event) => {
      const data = JSON.parse(event.data);
      setMessage(data.message);
    };

    eventSource.onerror = () => {
      console.error('EventSource failed.');
      eventSource.close();
    };

    return () => {
      eventSource.close(); // Clean up the event source on component unmount
    };
  }, []);

  return (
    <div>
      <h1>SSE Messages</h1>
      <p>{message}</p>
    </div>
  );
};

export default EventStream;
