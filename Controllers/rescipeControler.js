import rescipes from "../Models/ResipesSchema.js";

export const createresipes = async (req, res) => {
  try {
    const resipe = new rescipes(req.body);
    await resipe.save();
    res.status(200).json({ message: "product is succesfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error", data: error });
  }
};
// export default createresipes;

//get method

export const getAllresipes = async (req, res) => {
  try {
    const getRescipe = await rescipes.find();
    res.status(200).json({ message: "rescipe retratieved", data: getRescipe });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

//get by id

export const getRecibeById = async (req, res) => {
  try {
    const rescipeId = req.params.id;
    const rescipe = await rescipes.findById(rescipeId);
    if (!rescipe) {
      return res.status(404).json({ message: "rescipe not found" });
    }
    res.status(200).json({ message: "rescipe succesfully", data: rescipe });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

//update

export const updateRecibe = async (req, res) => {
  try {
    const rescipeId = req.params.id;
    const { name, procuger, ingredients, duriation } = req.body;
    const result = await rescipes.findByIdAndUpdate(
      { _id: rescipeId },
      { name, procuger, ingredients, duriation },
      { new: true }
    );
    if (result.matchedCount === 0) {
      return res.status(404).json({ message: "recope not found" });
    }
    res.status(200).json({ message: "rescipe updated", data: result });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

//delete method

export const deleteRecipe = async (req, res) => {
  try {
    const rescipeId = req.params.id;
    const result = await rescipes.findByIdAndDelete({ _id: rescipeId });
    if (!result) {
      return res.status(404).json({ message: "rescipe not found" });
    }
    const rescipe = await rescipes.find();
    res.status(200).json({ message: "rescipe deleted", data: rescipe });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
