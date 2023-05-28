import React, {useState} from "react";
import EventCardWishlist from "../components/eventCardWishlist";

function MyWishlist() {
    const [events, setEvents] = useState([
        {
            "id": 1,
            "name": "Cricket Match",
            "Date": "17 June, 2023",
            "Time": "6:30 PM - 11:00 PM IST",
            "Location": "Bangalore, India",
            "wishlist": true,
            "category": "sports",
        },
        {
          "id": 2,
            "name": "Music Concert",
            "Date": "6 August, 2023",
            "Time": "2:30 PM - 4:00 PM IST",
            "Location": "Ahmedabad, India",
            "wishlist": true,
            "category": "music",
        },
        {
          "id": 3,
          "name": "Football Match",
          "Date": "29 June, 2023",
          "Time": "7 AM - 12:00 PM IST",
          "Location": "Punjab, India",
          "wishlist": true,
          "category": "sports",
      },
        {
          "id": 4,
            "name": "Standup Show",
            "Date": "3 July, 2023",
            "Time": "9 PM - 11 PM IST",
            "Location": "Delhi, India",
            "wishlist": true,
            "category": "comedy",
        },
        {
          "id": 5,
          "name": "Cricket Match",
          "Date": "17 June, 2023",
          "Time": "6:30 PM - 11:00 PM IST",
          "Location": "Bangalore, India",
          "wishlist": true,
          "category": "sports",
          "image_url": ""
      },
      {
        "id": 6,
        "name": "Music Concert",
        "Date": "6 August, 2023",
        "Time": "2:30 PM - 4:00 PM IST",
        "Location": "Ahmedabad, India",
        "wishlist": true,
        "category": "music",
    },
        {
          "id": 7,
            "name": "Football Match",
            "Date": "29 June, 2023",
            "Time": "7 AM - 12:00 PM IST",
            "Location": "Punjab, India",
            "wishlist": true,
            "category": "sports",
        },
        {
          "id": 8,
          "name": "Cricket Match",
          "Date": "17 June, 2023",
          "Time": "6:30 PM - 11:00 PM IST",
          "Location": "Bangalore, India",
          "wishlist": true,
          "category": "sports",
      },
      {
        "id": 9,
        "name": "Standup Show",
        "Date": "3 July, 2023",
        "Time": "9 PM - 11 PM IST",
        "Location": "Delhi, India",
        "wishlist": true,
        "category": "comedy",
    },
    ])

    function removeEvent(id) {
      const confirm1 = window.confirm("Are you sure you want to remove this event from wishlist?");
      if (confirm1) {
        const newEvents = events.filter(event => event.id!== id);
        setEvents(newEvents);
        setSearchResults(newEvents);
      }

    }

    const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState(events);

  const handleSearch = (event) => {
    const query = event.target.value;
    setSearchQuery(query);

    if(searchQuery.length > 0) {
    const filteredData = events.filter((item) =>
      item.name.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(filteredData);
    } else {
      setSearchResults(events);
    }
  };
   
  const handleDateSort = () => {
    const sortedArray = [...events].sort((a, b) => {
      const dateA = new Date(a.Date);
      const dateB = new Date(b.Date);
      return dateA - dateB;
    });

    setSearchResults(sortedArray);
  };

  const handleNameSort = () => {
    const sortedArray = [...events].sort((a, b) => {
      return a.name.localeCompare(b.name);
    });
    setSearchResults(sortedArray);
  };

  const handleFilterThisWeek = () => {
    const currentDate = new Date();

    const filteredArray = events.filter((item) => {
      const itemDate = new Date(item.Date);
      const startOfWeek = new Date(currentDate.setDate(currentDate.getDate() - currentDate.getDay()));
      const endOfWeek = new Date(startOfWeek);
      endOfWeek.setDate(startOfWeek.getDate() + 6);

      return itemDate >= startOfWeek && itemDate <= endOfWeek;
    });

    setSearchResults(filteredArray);
  };

  const handleFilterThisMonth = () => {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();

    const filteredArray = events.filter((item) => {
      const itemDate = new Date(item.Date);
      const itemMonth = itemDate.getMonth();

      return itemMonth === currentMonth;
    });

    setSearchResults(filteredArray);
  };

    return (
        <div>
            <div class="my-4 mx-4">
      <div class="d-flex justify-content-between">
        <div>
          <h2>My Wishlist <i class="bi bi-bookmarks-fill"></i></h2>
        </div>
        <div class="d-flex">
          <div class="input-group mx-3">
            <input type="text" class="form-control" value={searchQuery} onChange={handleSearch} placeholder="Search Event"/>
            <button class="btn btn-outline-secondary" type="button" id="button-addon2"><i class="bi bi-search"></i></button>
          </div>
          <div class="dropdown mx-3">
            <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              Sort By
            </button>
            <ul class="dropdown-menu">
              <li><span class="dropdown-item" onClick={handleDateSort}>Date</span></li>
              <li><span class="dropdown-item" onClick={handleNameSort}>Name</span></li>
            </ul>
          </div>
          <div class="dropdown mx-3">
            <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              Filter By
            </button>
            <ul class="dropdown-menu">
              <li><span class="dropdown-item" onClick={handleFilterThisWeek}>This Week</span></li>
              <li><span class="dropdown-item" onClick={handleFilterThisMonth}>This Month</span></li>
              <li><span class="dropdown-item" onClick={() => {
                setSearchResults(events);
              }}>Show All</span></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="container d-flex">
      <div class="row">
          {searchResults.map(event => (
            <EventCardWishlist key={event.id} event={event} removeEvent={removeEvent} /> 
        ))   
        }
      </div>  
    </div>
        </div>
    );
}

export default MyWishlist;