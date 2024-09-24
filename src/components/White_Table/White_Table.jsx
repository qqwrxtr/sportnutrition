const White_Table = () => {
    return (
        <div className="flex flex-col max-w-[1230px] w-full mb-20 px-10 lg:px-0">
          <h1 className="text-3xl font-bold mb-6">Carbohydrate content</h1>
          
          <div className="w-full overflow-x-auto">
            <table className="w-full text-center table-auto border-collapse">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-2 font-semibold border-b border-black">Food</th>
                  <th className="px-4 py-2 font-semibold border-b border-black">Serving size</th>
                  <th className="px-4 py-2 font-semibold border-b border-black">Carbohydrate content (g) <br />per serving size</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Wholewheat pasta (boiled)", "180g", "49.5"],
                  ["Couscous", "150g", "56.3"],
                  ["Rice, wholegrain (boiled)", "180g", "52.6"],
                  ["Baked potato with skin", "220g", "49.7"],
                  ["Wholemeal bread", "80g", "33.6"],
                  ["Banana", "100g", "20.3"],
                  ["Crumpet, toasted", "50g", "22.7"],
                  ["Oatcakes", "24g", "15.1"],
                  ["Sweetcorn", "80g", "11.1"],
                  ["Broccoli", "80g", "2.8"]
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
 
export default White_Table;