const YellowTable = () => {
    return (
      <div className="flex justify-center items-center w-full py-10 xl:py-15 mb-10 xl:mb-20 bg-yellow-400">
        <table className="border border-black text-left text-black mx-10">
          <thead>
            <tr>
              <th className="px-4 py-5 border-b border-black font-bold">
                Intensity of activity
              </th>
              <th className="px-4 py-5 border-b border-black font-bold text-right">
                Recommended intake (per kg body weight, per day)
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-5 border-b border-black">Light</td>
              <td className="px-4 py-5 border-b border-black text-right">3-5g</td>
            </tr>
            <tr>
              <td className="px-4 py-5 border-b border-black">
                Low intensity/ skill based
              </td>
              <td className="px-4 py-5 border-b border-black"></td>
            </tr>
            <tr>
              <td className="px-4 py-5 border-b border-black">Moderate</td>
              <td className="px-4 py-5 border-b border-black text-right">5-7g</td>
            </tr>
            <tr>
              <td className="px-4 py-5 border-b border-black">
                Moderate exercise programme
              </td>
              <td className="px-4 py-5 border-b border-black"></td>
            </tr>
            <tr>
              <td className="px-4 py-5 border-b border-black">High</td>
              <td className="px-4 py-5 border-b border-black text-right">6-10g</td>
            </tr>
            <tr>
              <td className="px-4 py-5 border-b border-black">Endurance programme</td>
              <td className="px-4 py-5 border-b border-black"></td>
            </tr>
            <tr>
              <td className="px-4 py-5 border-b border-black">Very high</td>
              <td className="px-4 py-5 border-b border-black text-right">8-12g</td>
            </tr>
            <tr>
              <td className="px-4 py-5 border-b border-black">
                Extreme commitment (&gt;4 hours/day moderate-high intensity exercise)
              </td>
              <td className="px-4 py-5 border-b border-black"></td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  };
  
  export default YellowTable;
  