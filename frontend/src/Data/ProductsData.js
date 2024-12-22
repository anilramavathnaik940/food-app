
const foodItems = [
    {
      category: "Salads",
      items: [
        { 
          id: 1, 
          image: "https://www.foodandwine.com/thmb/LrQfsu-jKEnC4EYQs049M5S-PWs=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/FAW-recipes-big-italian-salad-ingredients-4139f3c6eb6c431782c5646ee121b5d7.jpg", 
          title: "Caesar Salad", 
          description: "Classic Caesar salad with croutons and Caesar dressing.", 
          price: 180 
        },
        { id: 2, image: "https://images.immediate.co.uk/production/volatile/sites/30/2014/05/Epic-summer-salad-hub-2646e6e.jpg?quality=90&webp=true&resize=375,341", title: "Greek Salad", description: "Fresh veggies like cucumber, tomatoes, and olives with feta cheese.", price: 200 },
        { id: 3, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4LTim3IXITN00aB_2mh5Euqs64pmVWBkk5aiALBqIjhQN0qxhlwDnWV7c9RM3", title: "Garden Salad", description: "A mix of fresh greens, carrots, and tomatoes.", price: 150 },
        { id: 4, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG5fLWfjwQ-67AlH9EF5MJ0bIb9AazI3eOJoPvVxOczICokl2pSQXzpcOlwMTs", title: "Fruit Salad", description: "A delightful mix of seasonal fresh fruits.", price: 140 },
        { id: 5, image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQdBUZhjafDK0pPQKxsUdX-j2OGCX0W_A0daBK-Czz2GbZqTbSWPBUXZCF2FzDr", title: "Chicken Salad", description: "Grilled chicken slices with mixed greens.", price: 220 },
        { id: 6, image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSOEkPrXBFMH8-DcMbWhbGbFuMnp7__jlSojVmuN2xBNkLMMP4IocXvGhDy3ueV", title: "Pasta Salad", description: "Creamy pasta with fresh veggies and herbs.", price: 190 },
        { id: 7, image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTYX0-KeaOsaxPCzcJiaLt06eTRHGlTOlvufBzK2qRRa-gL057bKPw7PJyKPAgk", title: "Quinoa Salad", description: "Healthy quinoa with chopped veggies and lemon dressing.", price: 230 },
        { id: 8, image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTYX0-KeaOsaxPCzcJiaLt06eTRHGlTOlvufBzK2qRRa-gL057bKPw7PJyKPAgk", title: "Caprese Salad", description: "Mozzarella, tomatoes, and basil drizzled with balsamic glaze.", price: 210 },
        { id: 9, image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTTjsGETRVGiEY3OqrzIdq68Os_rFn9h_pFHi7HikTLtc7pO9UAfwZrf3feHgC6", title: "Coleslaw", description: "Cabbage and carrot salad with creamy dressing.", price: 160 },
        { id: 10, image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQiWDj-tq0Slk1Vz4YzfeN-BUNLf5ibEoRSxQGp91qWfx_fshG93ocTVeTp-GxT", title: "Asian Salad", description: "Crunchy veggies with sesame dressing and a hint of soy sauce.", price: 200 },
      ],
    },
    {
      category: "Desserts",
      items: [
        { id: 1, image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSNGUPK3c7-bDuCk3IecduU3xVBc7072w2SDP7pw_8hsP6sSshjIbF6pdzjNPfI", title: "Chocolate Cake", description: "Rich and moist chocolate cake.", price: 150 },
        { id: 2, image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ1-nXYaHUjUSlRKeaZ8alzzwQwVhJSHDkkSqdGVije38Zo1mizfhms4uoyiw28", title: "Gulab Jamun", description: "Soft milk-based dumplings soaked in sugar syrup.", price: 120 },
        { id: 3, image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR9WiXpPwP_urb8U4UvO2ir9ObEMAOvo3qtOBLSVX3jQxlqK4z1jtZxpHFtyRvw", title: "Ice Cream Sundae", description: "Vanilla ice cream with chocolate syrup and toppings.", price: 130 },
        { id: 4, image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRfLfF4OON4t3lUtYmNsrg3atcnQ6Bln0FpkzzniULB2bt-x571uKCiobBsLRQ3", title: "Fruit Custard", description: "Fresh fruits in a creamy custard base.", price: 140 },
        { id: 5, image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRQmn0SvcJSvbgnRcUU1e7TtJ4NhgSKlYfXC3nWlBKSGadbWlNwdnlxp-C-b3Ag", title: "Cheesecake", description: "Classic New York-style cheesecake.", price: 200 },
        { id: 6, image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRANcWXOq5GhvKb46OPxQ5PmDFZGcbiNiThR_8YIavC-JZl7Ft7VsEu46iLGXcc", title: "Tiramisu", description: "Italian dessert made with layers of coffee-soaked sponge and mascarpone.", price: 220 },
        { id: 7, image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR9a0-09M_pzJIDJcIX6uv1pLlv6u2OYCtui1V3DUIGfURaBGoZ1OrXtQ2AAUMu", title: "Brownie", description: "Chewy chocolate brownie.", price: 100 },
        { id: 8, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcyho8gEYDBHa1KTdFZtqW9iLSdbGUNF0q2dnkBLr2y4sQ9D9BQFcxND0C350N", title: "Carrot Halwa", description: "Indian dessert made with grated carrots and condensed milk.", price: 160 },
        { id: 9, image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRG7ximLSJuMfnp97OIQBoN5a7mG_BN2IMy65n4C8l8Ck2xMeTPEFDtrX5uAiaE", title: "Kulfi", description: "Traditional Indian ice cream made with condensed milk and cardamom.", price: 130 },
        { id: 10, image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ1-nXYaHUjUSlRKeaZ8alzzwQwVhJSHDkkSqdGVije38Zo1mizfhms4uoyiw28", title: "Pudding", description: "Creamy caramel pudding.", price: 150 },
      ],
    },
    {
      category: "Fast Food",
      items: [
        { id: 1, image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQXWo6VeswNKbcMUceqf-n7R1QYYJ2Ie5mVHictj1tU4FwYkhKhYagcIxQe9YQC", title: "Burger", description: "Juicy beef burger with cheese and lettuce.", price: 150 },
        { id: 2, image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSPIkdFAZBFwjVEIJY8jFt7lEwplrWUzmGEzoATsuUIfru7YfLeEOrJ9T8W84B3", title: "French Fries", description: "Crispy golden potato fries.", price: 80 },
        { id: 3, image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS97snBRVI5W9_Y62S36R02VSVoTaWyds9D-UtK8Y79o9GgUNtAy8RG5Zgfoc-b", title: "Pizza", description: "Cheese-loaded pizza with fresh toppings.", price: 250 },
        { id: 4, image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQZC_FBPGiLA7eFdi_OSzy_Oz20CppiqUbVdj3D-ux8F80hNBRIUvMg7WXK6Tf_", title: "Fried Chicken", description: "Crispy and spicy fried chicken.", price: 200 },
        { id: 5, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB0mKefsiGQmE5I4jGgmep9LIKnWpphnfs2pk4uYVEBk791dQTkskjhX6osfDt", title: "Hot Dog", description: "Grilled sausage in a bun with mustard and ketchup.", price: 120 },
        { id: 6, image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTkygutRln3lScyTAM2F2kshROXHaLvRHFflzwHJP86aT0BiW4N-2drBQ26jGJ6", title: "Sandwich", description: "Grilled vegetable sandwich with cheese.", price: 100 },
        { id: 7, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3cbp3wpKvtOEbYyTpUdYZ71BxQDEVJLO-SnJa7cM97iVQrefwJ5U6Igfp-OEK", title: "Tacos", description: "Soft tacos filled with beans, veggies, and cheese.", price: 150 },
        { id: 8, image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS7fpJvHJiKECaAb0uW53rMbH5gWxW_Nxs237B1cE_VfibEdX3BHown1hTwgxVB", title: "Onion Rings", description: "Crispy deep-fried onion rings.", price: 90 },
        { id: 9, image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ0BVwDGwfn0Tb_E1kWe8k3OePGMms7dJOxOdPOnXxV38oq9FASIgCqGnuA6QhM", title: "Pasta", description: "Creamy Alfredo pasta.", price: 180 },
        { id: 10, image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR5Ztr-FWYw6-uh3iphNyK5NO2EWQG6q4wtPNN0eOA8T2WohOKNEtIwf0i9kblX", title: "Spring Rolls", description: "Crispy rolls filled with spiced veggies.", price: 110 },
      ],
    },

    {
        category :"NonVeg", 
        items : [
            {
                id: 1,
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPdGRRwtE3f-GHB3MFJ9rk-W9U4KLyd71kuQ3Xo3xmjTLWMpdZ59MR9_Llj5jM",
                title: "Grilled Chicken",
                description: "Succulent chicken grilled to perfection with a blend of spices.",
                price: 250,
              },
              {
                id: 2,
                image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRJnatUKFt7dADZwPBLXijpU3LnB_epWh-kVLwtHb5Wc7OgpxDMuRedhkwZMYtf",
                title: "Chicken Biryani",
                description: "Aromatic basmati rice cooked with chicken and flavorful spices.",
                price: 300,
              },
              {
                id: 3,
                image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRvRQB6wpYR5erYd7_q4VkGng6ron35cdpkGbXrv3iwVnJFUgcKzg63kJ9bjOPH",
                title: "Mutton Curry",
                description: "Tender mutton cooked in a rich and spicy curry.",
                price: 400,
              },
              {
                id: 4,
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8yq33VFtuCT_lpxNocyBD27ziVoTfoZmHj0JIWnXcb_f5kpOObJsmRpHLl-39",
                title: "Fish Fry",
                description: "Crispy fried fish seasoned with Indian spices.",
                price: 200,
              },
              {
                id: 5,
                image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQu3PRwKpKPlPuGrgtjP-vdb7LtPwrNVKLo_7vdPke0WjA9Iy3xhBbuqHSfAVKv",
                title: "Prawn Masala",
                description: "Fresh prawns cooked in a spicy and tangy masala sauce.",
                price: 350,
              },
              {
                id: 6,
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKUVfDUWVutXBoIc6G0HMZhJW5YZNsYLkfd-dwOr1KYliYbkOZ2Z_67N3FBOHh",
                title: "Egg Curry",
                description: "Hard-boiled eggs simmered in a spiced curry gravy.",
                price: 150,
              },
              {
                id: 7,
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHXqUMg1Yk8JkE1cDQdwRRBDrJQgmKXa0zgeODhStqdIfovE3b_lWAGKqTb149",
                title: "Tandoori Chicken",
                description: "Juicy chicken marinated with yogurt and spices, roasted in a tandoor.",
                price: 280,
              },
              {
                id: 8,
                image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcShtH8x1Z5FsFCecnhuroTqBZptXjeCbb9L8viRnJAgRGpTDfhfQcU8_3M4T9E_",
                title: "Chicken Tikka",
                description: "Chunks of chicken marinated in spices and grilled to perfection.",
                price: 270,
              },
              {
                id: 9,
                image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQOkfZ_JfX15jMdCKmw45GTZ5vkX9Df_EHH-mbUqULA19cNiaMztQ9GxIxcdh7U",
                title: "Crab Curry",
                description: "Fresh crabs cooked in a rich and flavorful curry.",
                price: 500,
              },
              {
                id: 10,
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNrF9lumIm0z12_FZxM25tRSK2-r_vSCTA9STyQ9_S2sN3v8OdaKjfRxUm6dwq",
                title: "Beef Steak",
                description: "Juicy beef steak served with a side of vegetables.",
                price: 450,
              },
        ],
    },

    {
        category:"Veg",
        items : [
            { id: 1, image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRK4b0zVCsf8QCkVlhtVgZBr4VhmX-aAYhnRMLgLGCF3FyFSFylnxmm_8xckjNc", title: "Paneer Butter Masala", description: "Rich and creamy paneer cooked in a tomato-based gravy.", price: 220 },
            { id: 2, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxkwKLbObsDd5nIBbPGU8QZKlFPmSnGZvs5zxJikGVQTsNjPfcH40mRqDc4_Gn", title: "Vegetable Pulao", description: "Basmati rice cooked with mixed vegetables and spices.", price: 180 },
            { id: 3, image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSVpAQ8GQKsO9Z4CuCXFR789X4xciwngo7gQgEbwqtiSIQsp4grpaLlvPYTNXrm", title: "Aloo Gobi", description: "Potatoes and cauliflower cooked with Indian spices.", price: 150 },
            { id: 4, image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ67aTfGxI48qX0LAuJs3XNtlyTSQsuPN9L7OkgPSfWhcLnw_FCalpXh6yzM4PV", title: "Chana Masala", description: "Chickpeas in a tangy and spicy curry.", price: 170 },
            { id: 5, image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRhNMsTcINwIdwc7JcaXZMhIeqA2o7DS0X1ACDjeQfxEZpymllEnwveaBV1l3fz", title: "Bhindi Masala", description: "Fresh okra stir-fried with onions and spices.", price: 160 },
            { id: 6, image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSmHeTpPMmbB1_nuyAlLbQC4tAkF3Us0x5-ngH9ChuYMX-WS8RtpDD1wXBY5xzC", title: "Dal Tadka", description: "Yellow lentils tempered with ghee and spices.", price: 140 },
            { id: 7, image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSqcnGmL81o_i0_GVXZ8s6heMU1D68FBdJ5sZeRyfxmEVPMnHeEEMrIXxoTTiiQ", title: "Palak Paneer", description: "Spinach and paneer cooked in creamy curry.", price: 210 },
            { id: 8, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4oCpvS5xJZ9VhPIcY9vjiNGmylil5_Mjr7FCvyLySIW2v8XAhAAg_MZUYChOc", title: "Mixed Veg Curry", description: "A mix of seasonal vegetables in a rich curry.", price: 190 },
            { id: 9, image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRWRuJ5LP8Eom-Ri_j1QloIUGiLhQoe15Du3s1uWR6tMicLY6tgwpNH6exrrOYy", title: "Kadai Paneer", description: "Paneer cubes cooked with capsicum and onions in spicy gravy.", price: 200 },
            { id: 10, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwJsem216zGmUYVQYBx9tEwyQSDwrT2-Ti_aJzAGdZzkP0CpXE9R10jIvrW5Lg", title: "Matar Paneer", description: "Green peas and paneer in a flavorful curry.", price: 190 },
        ]
    },

    {
        category:"Soups",
        items : [
            { id: 1, image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTkwIbURyDEJFGzYLjq6eTvIrIKfrpbjJ1166HNULEDsX0ZBx7xTUVOTNNlOw_B", title: "Tomato Soup", description: "Classic creamy tomato soup.", price: 120 },
            { id: 2, image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ8rgyZUUF8xcpeDBDYfM7gFIeoV4LrWT1iELHjiYoftky7u14saVPFKKODWX3p", title: "Sweet Corn Soup", description: "Smooth and flavorful corn soup.", price: 130 },
            { id: 3, image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRuT8NBWnxtlsKSQKsXFxGL7wcHuFCWnkt818zmY_QQJR2LjkYmTQ3XJ1t98z9h", title: "Mushroom Soup", description: "Creamy mushroom soup.", price: 140 },
            { id: 4, image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTjBVDuKVcfIR-yJDbFnoYXz9stZZ6oCwsVb1QRs6VvLRGhjlfHqzOIbrYedd3f", title: "Chicken Soup", description: "Traditional chicken soup with herbs.", price: 150 },
            { id: 5, image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQGCVPqMjYTisdqRc1UYYfnonsm5YPGxl3s97ClGlZzmVOS1Je4rVand-zxhaOP", title: "Hot and Sour Soup", description: "Spicy and tangy soup.", price: 140 },
            { id: 6, image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSTg-dzOZEqRMYh1EHc5gI1TAH7ZNO2KVCNRTkljhyRFFAgb9KxdXol8wUFAiwZ", title: "Manchow Soup", description: "Chinese-style spicy vegetable soup.", price: 130 },
            { id: 7, image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ_j7m7Wrxk-xDwj7IN_2lMo_p6FQp5E1IzEL_iQ5lOeT0P4MeHYkuCXu5BJV5e", title: "Minestrone Soup", description: "Italian vegetable soup with pasta.", price: 150 },
            { id: 8, image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQA-MYNOkc8dl50moE9Ag5GXsnFldq7kmzKWXyN3n_lTDmnV95CPCvPG4wsKPnv", title: "Pumpkin Soup", description: "Creamy pumpkin soup with spices.", price: 120 },
            { id: 9, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZp1EUUW19r-pPUuy_N1BnGzKO3AYBrlaz9Y77m0y4tucYG8rgXyjwEwGhO7hN", title: "Seafood Soup", description: "A mix of seafood in a light broth.", price: 170 },
            { id: 10, image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTpRPkGxWNiWEpk7ZOhIrO0rY1lvGdeo2u3owMSojJwfr5lg0eJtnJrvdc8IhM7", title: "Lentil Soup", description: "Nutritious lentil soup with herbs.", price: 110 },
        ]
    },

    {
        category : "Sea Food",
        items:[
            { id: 1, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCTPdwNkib1rd378mCu4xBrViE8ZB2AZ1Mr71S8K_1YtOOMQ2a9kminMmKNEV2", title: "Grilled Salmon", description: "Perfectly grilled salmon with lemon butter.", price: 350 },
            { id: 2, image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQxeSzDgGpfjomCkpey1oQivIijCMEO4u-j8PM5yK5u20zlqq34CjxebWqd4Yda", title: "Prawn Curry", description: "Juicy prawns in a spicy and tangy curry.", price: 300 },
            { id: 3, image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcReityxxsjL9ZjCQ3UnQFmjlh5ptWgHSiZXEGgNlZiJAkoyTRA7qVY6RPsp8VR6", title: "Crab Masala", description: "Crabs cooked in a rich masala.", price: 400 },
            { id: 4, image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ08S9LsTkz4MI2bc28X5DP_1lA7j86w2sNr_kqD4VwbF1IJd_GF04de6Uu7Hso", title: "Fried Fish", description: "Crispy fried fish fillets.", price: 250 },
            { id: 5, image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTJb0OOofCErrxLKwG7JrykZurIVc8LwNSwKI4VDo1ZrbJObIZvw_j8tmEb9LGV", title: "Lobster Thermidor", description: "Lobster baked with a creamy sauce.", price: 500 },
            { id: 6, image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQZLLQdPR4_xWBeHgE0XAE8pZ-m2JLqh5VpNV_bX-4c9vtWaTAwyt_Fd5t_Tnbe", title: "Seafood Pasta", description: "Creamy pasta with a mix of seafood.", price: 350 },
            { id: 7, image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcThYJXs60hk74LgCM4v8RE44E-pb4vbWRsVkd8OpANvRlQ6MHw78mf2VYaQh8xn", title: "Fish Curry", description: "Traditional fish curry.", price: 280 },
            { id: 8, image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTGmhakIvhg-8OBELZqmUwKku_Cr4hBoFUbtXPDgrqlgAXcloFbf1ua0-hEr89p", title: "Shrimp Skewers", description: "Grilled shrimp on skewers.", price: 300 },
            { id: 9, image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSK90QZD1iUUbpy7EjOkOTDe-j3dJ8-16EtEjNra39IkBex1Xrg3uF7ms1Qdqoy", title: "Clam Chowder", description: "Rich and creamy clam soup.", price: 320 },
            { id: 10, image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR9ehvPVnNxg0xE1TebDIh-gtTxmW2-oYTTPuA6TeZKu1IHRu0DbcKI7Z8b3WV4", title: "Calamari", description: "Crispy fried squid rings.", price: 270 },
        ]
    },

    {
      category: "Cuisines",
      items: [
          { id: 1, image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS_iQ935aEWffLMyBiu69sQ0xbAzsd_FJnTGvjQycHaV-HTwak1gQ80r7lnl0fF", title: "Italian Spaghetti Carbonara", description: "Classic Italian pasta made with eggs, cheese, pancetta, and black pepper.", price: 250 },
          { id: 2, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq_x6PpaihQuiS9COek0Gj4earlnZJrWyGD7L0DE5PzqprWyuYN-BL7RhCIYO_", title: "Mexican Tacos Al Pastor", description: "Soft tortillas filled with marinated pork, pineapple, onions, and cilantro.", price: 200 },
          { id: 3, image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTCCERgI1zxZr0V48f1MSmKJQDyr8tiXsorwoQ0oFRhwVKR6Ra_QgiW3xiYK7Ud", title: "Mutton Biryani", description: "Rich and creamy curry made with marinated chicken in a spiced tomato sauce.", price: 300 },
          { id: 4, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfNJLnuLUK0-swB2Jh140J5TdTLWX3mDHlENj2tHVZ_-rSGt-c0X9A5Xv2WzJE", title: "Prawn Biryani", description: "Rich and creamy curry made with marinated chicken in a spiced tomato sauce.", price: 280 },
          { id: 5, image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSSQBIBQpGiyao0A4BpxhgvJg0-S5KiZwwLWHvtfdbr79MTpjVdbU_IgZ2aA1Mz", title: "Japanese Sushi Platter", description: "An assortment of fresh nigiri, sashimi, and rolls served with soy sauce and wasabi", price: 220 },
          { id: 6, image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSR5W5sm4xtOgYNFXS9BUM4yCBxom-NlzX4FKS4g1JMHeM9NUO1KH96nH_ekiS9", title: "Chinese Kung Pao Chicken", description: "Stir-fried chicken with peanuts, vegetables, and chili peppers in a savory sauce.", price: 260 },
          { id: 7, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYE2GUiq7roVYeDHh72Jhq8ExPKfh-Py_FhijO1v2TkvOaCVV2Y_HqEuEYt3TG", title: "French Ratatouille", description: "Traditional Provençal vegetable stew with zucchini, eggplant, and bell peppers", price: 270 },
          { id: 8, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfNJLnuLUK0-swB2Jh140J5TdTLWX3mDHlENj2tHVZ_-rSGt-c0X9A5Xv2WzJE", title: "Greek Moussaka", description: "Layered casserole with eggplant, minced meat, and creamy béchamel sauce.", price: 290 },
          { id: 9, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq_x6PpaihQuiS9COek0Gj4earlnZJrWyGD7L0DE5PzqprWyuYN-BL7RhCIYO_", title: "Spanish Paella", description: "Saffron-flavored rice dish with seafood, chicken, and mixed vegetables.", price: 240 },
          { id: 10, image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS_iQ935aEWffLMyBiu69sQ0xbAzsd_FJnTGvjQycHaV-HTwak1gQ80r7lnl0fF", title: "Korean Bibimbap", description: "Mixed rice bowl topped with vegetables, beef, egg, and spicy gochujang sauce.", price: 280 },
      ]
  }
  
];
  
export default foodItems;