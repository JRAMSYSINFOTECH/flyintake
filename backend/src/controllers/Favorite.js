import Favorite from "../models/Favorite.js";

export const createFavorite = async (req, res) => {
  try {
    const { name, country } = req.body;
    const userId = req.user._id;

    const exists = await Favorite.findOne({ name, user: userId });
    if (exists) {
      return res.status(409).json({
        success: false,
        message: "Already favorited",
      });
    }

    const fav = new Favorite({ name, country, user: userId });
    await fav.save();

    res.status(201).json({
      success: true,
      message: "Added to favorites",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getFavorites = async (req, res) => {
  try {
    const userId = req.user._id;
    const favorites = await Favorite.find({ user: userId });
    res.status(200).json({
      success: true,
      data: favorites,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const deleteFavorite = async (req, res) => {
  try {
    const { name } = req.params;
    const userId = req.user._id;
    const deleted = await Favorite.findOneAndDelete({ name, user: userId });
    if (!deleted) {
      return res.status(404).json({
        success: false,
        message: "Favorite not found",
      });
    }
    res.status(200).json({
      success: true,
      message: "Removed from favorites",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
