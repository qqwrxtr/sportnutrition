const ProteinTable = () => {
    return (
        <div className="flex flex-col max-w-[1230px] w-full mb-20 px-10 lg:px-0">
          <h1 className="text-3xl font-bold mb-6">Protein content</h1>
          
          <div className="w-full overflow-x-auto">
            <table className="w-full text-center table-auto border-collapse">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-2 font-semibold border-b border-black">Food source</th>
                  <th className="px-4 py-2 font-semibold border-b border-black">Serving size</th>
                  <th className="px-4 py-2 font-semibold border-b border-black">Protein content (g) <br /> per serving size</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Chicken breast grilled", "120g", "38.4"],
                  ["Salmon fillet grilled", "120g", "29.5"],
                  ["Rump steak grilled", "130g", "40.3"],
                  ["Tuna canned in brine", "60g", "15.0"],
                  ["Baked beans", "200g", "10.0"],
                  ["Almonds", "20g", "4.2"],
                  ["Eggs", "120g", "16.9"],
                  ["Half fat cheddar cheese", "30g", "9.8"],
                  ["Semi skimmed milk", "200ml", "7.0"]
                ].map((row, idx) => (
                  <tr key={idx} className="border-t border-black">
                    {row.map((cell, idx) => (
                      <td key={idx} className="px-4 py-4">{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );
    };
 
export default ProteinTable;