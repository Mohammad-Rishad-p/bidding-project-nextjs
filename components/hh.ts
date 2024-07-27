// import dbConnect from "@/libs/dbConnect";
// import Product from "@/models/product";
// import { NextResponse } from "next/server";

// export async function POST(request: any) {
//     try {
//         const { userName } = await request.json();
//         await dbConnect();
//         console.log("connected to db in live auction");
//         const url = new URL(request.url);
//         const pathname = url.pathname;
//         const productId = pathname.split('/').pop();
//         console.log(productId);
//         const product = await Product.findById(productId);
//         console.log("product fetched successfully");

//         if (!product) {
//             console.log("No product found in the database.");
//             return NextResponse.json({ message: "No product found with the given _id." });
//         }
//         product.currentBid = product.currentBid + product.minimumIncrease
//         product.bidWinner = userName
//         await product.save();

//         return NextResponse.json(product);

//     } catch (err: any) {
//         console.error("Error fetching product:", err);
//         return NextResponse.json({ error: err.message }); // Return error message in response
//     }
// }





// {/* bid winning history */}

// <div className=' bg-gray-100 w-[45%] py-4 flex-col gap-12 flex dark:text-black'>
// {/* heading */}
// <div className='flex items-center justify-center font-serif text-3xl '>
//     Bid Winning history
// </div>
// <div className="max-h-96 overflow-y-scroll p-4 border border-gray-300 b-x bg-gray-100">
//     {user.bids.length > 0 ? (
//         user.bids.map((bid, index) => (
//             <div
//                 key={index}
//                 className="flex justify-between mx-[4%] gap-3 font-serif text-xl px-2 border- border-gray-400 py-1"
//             >
//                 <div>{index + 1}</div>
//                 <div>{bid.productName}</div>
//                 <div>₹{bid.bidPrice}</div>
//             </div>
//         ))
//     ) : (
//         <div className="text-center dark:text-black">No bids yet</div>
//     )}
// </div>

// </div>