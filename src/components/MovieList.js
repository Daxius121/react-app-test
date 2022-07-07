import { useState } from "react";

export default function MovieList() {
  return (
    <div>
      <div>Movie List</div>
      <button>This Month</button>
      <button>This Year</button>
      <div>You are currently viewing {timespan}</div>
    </div>
  );
}
