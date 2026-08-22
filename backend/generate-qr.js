const QRCode = require('qrcode');
const fs = require('fs');
const path = require('path');

// Create QR codes folder if it doesn't exist
const qrDir = path.join(__dirname, '../frontend/assets/qr-codes');
if (!fs.existsSync(qrDir)) {
    fs.mkdirSync(qrDir, { recursive: true });
}

// Restaurant URL - change this to your actual URL when deployed
const BASE_URL = 'http://localhost:3000'; // Or your frontend URL

// Generate QR codes for tables 1-20
const tableCount = 20;

async function generateQRs() {
    console.log('📱 Generating QR codes for tables...');
    console.log(`📁 Output directory: ${qrDir}`);
    
    for (let i = 1; i <= tableCount; i++) {
        const tableUrl = `${BASE_URL}/frontend/index.htm?table=${i}`;
        const qrPath = path.join(qrDir, `table-${i}.png`);
        
        try {
            await QRCode.toFile(qrPath, tableUrl, {
                color: {
                    dark: '#facc15',  // Yellow
                    light: '#ffffff'   // White background
                },
                width: 400,
                margin: 2,
                errorCorrectionLevel: 'H'  // High error correction for better scanning
            });
            console.log(`✅ QR Code generated for Table ${i} -> ${qrPath}`);
        } catch (error) {
            console.error(`❌ Error generating QR for Table ${i}:`, error);
        }
    }
    
    // Generate HTML page with all QR codes
    generateQRPage();
    
    console.log('🎉 All QR codes generated!');
    console.log(`📁 Location: ${qrDir}`);
}

function generateQRPage() {
    const htmlContent = `<!DOCTYPE html>
<html>
<head>
    <title>Zaatarito - Table QR Codes</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
            font-family: system-ui, -apple-system, sans-serif;
            background: #1a1c20;
            color: #fff;
            padding: 20px;
        }
        h1 {
            color: #facc15;
            text-align: center;
            margin-bottom: 30px;
            font-size: 2rem;
        }
        .qr-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
            gap: 20px;
            max-width: 1200px;
            margin: 0 auto;
        }
        .qr-card {
            background: #2b2f36;
            border-radius: 12px;
            padding: 15px;
            text-align: center;
            border: 1px solid #4a505b;
        }
        .qr-card img {
            width: 100%;
            max-width: 180px;
            height: auto;
            border-radius: 8px;
            background: white;
            padding: 10px;
        }
        .qr-card .table-label {
            color: #facc15;
            font-weight: 700;
            margin-top: 10px;
            font-size: 1.1rem;
        }
        .qr-card .table-url {
            color: #94a3b8;
            font-size: 0.7rem;
            word-break: break-all;
            margin-top: 5px;
        }
        .print-btn {
            display: block;
            margin: 30px auto;
            padding: 12px 30px;
            background: #facc15;
            color: #1a1c20;
            border: none;
            border-radius: 8px;
            font-size: 1.1rem;
            font-weight: 700;
            cursor: pointer;
        }
        .print-btn:hover {
            background: #eab308;
        }
        @media print {
            .print-btn { display: none; }
            body { background: white; }
            .qr-card { background: #f5f5f5; border-color: #ddd; }
            .qr-card .table-label { color: #333; }
            .qr-card img { max-width: 150px; }
        }
    </style>
</head>
<body>
    <h1>📱 Zaatarito - Table QR Codes</h1>
    <button class="print-btn" onclick="window.print()">🖨️ Print All QR Codes</button>
    <div class="qr-grid" id="qrGrid"></div>
    
    <script>
        const tableCount = ${tableCount};
        const qrGrid = document.getElementById('qrGrid');
        
        for (let i = 1; i <= tableCount; i++) {
            const card = document.createElement('div');
            card.className = 'qr-card';
            card.innerHTML = \`
                <img src="assets/qr-codes/table-\${i}.png" alt="Table \${i} QR Code" />
                <div class="table-label">🍽️ Table #\${i}</div>
                <div class="table-url">Scan to order</div>
            \`;
            qrGrid.appendChild(card);
        }
    </script>
</body>
</html>`;
    
    const htmlPath = path.join(__dirname, '../frontend/assets/qr-codes.html');
    fs.writeFileSync(htmlPath, htmlContent);
    console.log(`✅ QR Code page created: ${htmlPath}`);
}

// Run the generator
generateQRs();