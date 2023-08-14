const express = require("express");
const router = express.Router();

const UserController = require("../controllers/UserController");

router.get("/province", UserController.Province);
router.get("/district", UserController.District);
router.get("/ward", UserController.Ward);
router.get("/cartitem", UserController.GetCartItem);
router.get("/address", UserController.Address);
router.post("/payment", UserController.Payment);
router.get("/shipdata", UserController.GetShipData);
// router.put("/updateCart",UserController.UpdateCart);
// router.post("/checkout",UserController.CheckOut)
module.exports = router;
