const LocationMap = () => {
  return (
    <div className="inline-block rounded-2xl overflow-hidden shadow-md">
      <iframe 
        title="Google Map Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3605.864952020863!2d101.6419004!3d2.9277715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cdb6e4a9d3b7a1%3A0xd0f74e8ad10f1129!2sMultimedia%20University%20-%20MMU%20Cyberjaya!5e1!3m2!1sen!2smy!4v1788462431292!5m2!1sen!2smy" 
        width="300" 
        height="300" 
        style={{ border: 0 }}
        allowFullScreen="" 
        loading="lazy" 
        referrerPolicy="strict-origin-when-cross-origin"
      />
      {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3605.864952020863!2d101.6419004!3d2.9277715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cdb6e4a9d3b7a1%3A0xd0f74e8ad10f1129!2sMultimedia%20University%20-%20MMU%20Cyberjaya!5e1!3m2!1sen!2smy!4v1788462431292!5m2!1sen!2smy" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe> */}
    </div>
  );
}

export default LocationMap