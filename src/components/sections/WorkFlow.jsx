export default function WorkflowDiagram({ onClick }) {
  return (
    <div className=" bg-white rounded-lg h-full shadow-lg max-w-6xl w-full relative max-h-[90vh] overflow-y-auto">
      <button
        onClick={onClick}
        className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-2xl font-bold z-10 bg-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-gray-100"
      >
        &times;
      </button>
      <div className="flex flex-col items-center gap-6 py-12  px-4 ">
        <h2 className="text-2xl md:text-3xl font-bold text-center ">
          MetaCrust Integration Workflow
        </h2>

        {/* Device Layer */}
        <h3 className=" md:text-lg font-semibold  bg-red-300 px-6 border-2 border-red-600 py-2 rounded-full mt-10">
          Device Layer
        </h3>
        {[
          "Wearable Device (MCU + Sensors)",
          "Firmware Integration",
          "MetaCrust Security Layer",
          "Encrypted Payload",
          "AI Anomaly Detection - Failed Auths – Packet Anomalies – Availability",
        ].map((step, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="bg-cyan-100 border-2 border-cyan-400 rounded-full px-6 py-3 shadow text-center text-xs md:text-sm">
              {step}
            </div>
            <div className="w-1 h-8 bg-gray-400 my-2" />
          </div>
        ))}

        {/* Gateway Layer */}
        <h3 className=" md:text-lg font-semibold bg-red-300 px-6 border-2 border-red-600 py-2 rounded-full mt-10">
          Gateway
        </h3>
        {[
          "Mobile App / Gateway - Secure Forwarding – Session Monitoring",
          "Secured Transport, MetaCrust Secure API",
        ].map((step, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="bg-cyan-100 border-2 border-cyan-400 rounded-full px-6 py-3 shadow text-center text-xs md:text-sm">
              {step}
            </div>
            <div className="w-1 h-8 bg-gray-400 my-2" />
          </div>
        ))}

        {/* End-System Layer */}
        <h3 className=" md:text-lg font-semibold bg-red-300 px-6 border-2 border-red-600 py-2 rounded-full mt-10">
          End-System
        </h3>
        {[
          "Server Agent - Logging – Threat Response – Closure",
          "Compliance Reporting - HIPAA – ISO – GDPR etc",
        ].map((step, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="bg-cyan-100 border-2 border-cyan-400 rounded-full px-6 py-3 shadow text-center text-xs md:text-sm">
              {step}
            </div>
            {index < 1 && <div className="w-1 h-8 bg-gray-400 my-2" />}
          </div>
        ))}

        {/* Demo Videos Section */}
        <div className="w-full mt-16 border-t-2 border-gray-200 pt-12">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
            Use Case Demo Videos
          </h2>
          <p className="text-center text-gray-600 mb-10 text-sm md:text-base max-w-2xl mx-auto">
            Watch how MetaCrust works in real-world applications
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
            {/* Demo Video 1 */}
            <div className="flex flex-col bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-6 shadow-lg border-2 border-cyan-100">
              <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-4 text-center">
                Demo Video 1
              </h3>
              <div className="relative w-full aspect-video bg-gray-200 rounded-xl overflow-hidden shadow-md">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src="YOUR_VIDEO_LINK_1_HERE"
                  title="MetaCrust Demo Video 1"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <p className="text-sm text-gray-600 mt-4 text-center">
                Description for demo video 1
              </p>
            </div>

            {/* Demo Video 2 */}
            <div className="flex flex-col bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-6 shadow-lg border-2 border-cyan-100">
              <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-4 text-center">
                Demo Video 2
              </h3>
              <div className="relative w-full aspect-video bg-gray-200 rounded-xl overflow-hidden shadow-md">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src="YOUR_VIDEO_LINK_2_HERE"
                  title="MetaCrust Demo Video 2"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <p className="text-sm text-gray-600 mt-4 text-center">
                Description for demo video 2
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
