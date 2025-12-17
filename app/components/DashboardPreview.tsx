export default function DashboardPreview() {
  return (
    <div className="mt-12 bg-gradient-to-br from-gray-900 to-black rounded-2xl p-1">
      <div className="bg-gray-900 rounded-xl p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <div className="h-10 w-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-600" />
            <div>
              <div className="h-3 w-24 bg-gray-700 rounded" />
              <div className="h-2 w-16 bg-gray-800 rounded mt-2" />
            </div>
          </div>
          <div className="h-8 w-24 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg" />
        </div>
        
        <div className="grid grid-cols-3 gap-4 mb-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-gray-800 rounded-lg p-4">
              <div className="h-4 w-16 bg-gray-700 rounded mb-3" />
              <div className="h-8 w-24 bg-gradient-to-r from-blue-500 to-cyan-500 rounded" />
            </div>
          ))}
        </div>
        
        <div className="h-48 bg-gradient-to-b from-gray-800 to-gray-900 rounded-lg p-4">
          <div className="flex justify-between items-center mb-4">
            <div className="h-4 w-32 bg-gray-700 rounded" />
            <div className="h-8 w-20 bg-blue-600 rounded" />
          </div>
          <div className="h-32 bg-gray-900 rounded" />
        </div>
      </div>
    </div>
  )
}