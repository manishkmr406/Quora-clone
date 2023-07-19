import React from 'react';
import "./SidebarOption.css";
import AddIcon from '@mui/icons-material/Add';

function SidebarOption() {
  return (
    <div className="sidebarOptions">
      <div className="sidebarOption">
        <img
          src="https://plus.unsplash.com/premium_photo-1661920294279-9c3b2a430e5c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aGlzdG9yeXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
          alt=""
        />
        <p>History</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://images.unsplash.com/photo-1665686308827-eb62e4f6604d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YnVzaW5lc3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
          alt=""
        />

        <p>Business</p>
      </div>
      <div className="sidebarOption">
        <img
          src="https://media.istockphoto.com/id/1250684365/photo/mental-health-during-lockdown.webp?b=1&s=170667a&w=0&k=20&c=jRAG4c-yalm6MZR0Mo6wbo3UlL4Bd4bmPAF3vTFwsjE="
          alt=""
        />
        <p>Psychology</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://media.istockphoto.com/id/1422610210/photo/grilled-lamb-rib-chops.webp?b=1&s=170667a&w=0&k=20&c=8TUa7V8sIGlpMIFqkRBmBRE5u238QeBpa_yWtQmFWTc="
          alt=""
        />
        <p>Cooking</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://media.istockphoto.com/id/1007705012/photo/athlete-listening-music-on-headphones.webp?b=1&s=170667a&w=0&k=20&c=cZBrE24INe8IFRzR16OVFAx1ifezeNhX4IUG_s1NF_Y="
          alt=""
        />
        <p>Music</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://media.istockphoto.com/id/1127076087/photo/black-female-engineer-working-on-industrial-machine-in-a-laboratory.webp?b=1&s=170667a&w=0&k=20&c=PJ6R-QijDvCaWqNvmGPJ9LNU1dcW8onc9OQcmASX9CM="
          alt=""
        />
        <p>Science</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://images.unsplash.com/photo-1535914254981-b5012eebbd15?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGhlYWx0aHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
          alt=""
        />
        <p>Health</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://images.unsplash.com/photo-1594909122845-11baa439b7bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bW92aWVzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
          alt=""
        />
        <p>Movies</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dGVjaG5vbG9neXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
          alt=""
        />
        <p>Technology</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZWR1Y2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
          alt=""
        />
        <p>Education</p>
      </div>
      <div className="sidebarOption">
        <AddIcon />
        <p className="text">Discover Spaces</p>
      </div>
    </div>
  )
}

export default SidebarOption
