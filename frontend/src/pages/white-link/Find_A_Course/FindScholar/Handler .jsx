import axios from "axios";

const [favoritedUniversities, setFavoritedUniversities] = useState({});
const handleHeartClick = async (uni) => {
  const token = localStorage.getItem("token");
  if (!token) {
    alert("Please login to add favorites");
    return;
  }

  const isFav = favoritedUniversities[uni.name];

  try {
    const config = {
      headers: { "Authorization": `Bearer ${token}` }
    };

    if (isFav) {
      // REMOVE from favorites
      await axios.delete(
        `/api/Favorite/${uni.name}`,
        config
      );
    } else {
      // ADD to favorites
      await axios.post("/api/Favorite/submit", {
        name: uni.name,
        country: uni.country,
      }, config);
    }

    // Dispatch event to update navbar
    window.dispatchEvent(new Event('favoritesUpdated'));

    // Update UI state
    setFavoritedUniversities((prev) => ({
      ...prev,
      [uni.name]: !isFav,
    }));
  } catch (error) {
    console.error("Favorite error:", error);
  }
};
