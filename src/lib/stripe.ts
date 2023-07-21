import Stripe from "stripe";

export const stripe = new Stripe('sk_test_51NVFDhGixW3KsAqcGMRXGfky6cYNulRYLg9ng7FcMfliWrrbFHGYoz48LpySqRyAH8TfT0u4NEaJKLeyICcR2dSR00rzeU4w88',{
    apiVersion:'2022-11-15',
    appInfo:{
      name:'Ignite Shop'
    }
  })