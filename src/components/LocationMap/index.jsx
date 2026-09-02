const LocationMap = () => {
  return (
    <div className="inline-block rounded-2xl overflow-hidden shadow-md">
      <iframe 
        title="Google Map Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.8967!2d101.7612!3d3.1558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM8KwMDknMjEuMCJOIDEwMcKwNDUnNDAuMyJF!5e0!3m2!1sen!2smy!4v1620000000000!5m2!1sen!2smy" 
        width="300" 
        height="300" 
        style={{ border: 0 }}
        allowFullScreen="" 
        loading="lazy" 
        referrerPolicy="strict-origin-when-cross-origin"
      />
    </div>
  );
}

export default LocationMap