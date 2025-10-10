document.addEventListener('DOMContentLoaded', () => {
    const tambahProdukBtn = document.getElementById('tambah-produk-btn');
    const namaProdukInput = document.getElementById('nama-produk');
    const hargaProdukInput = document.getElementById('harga-produk');
    const itemKeranjangBody = document.getElementById('item-keranjang');
    const totalHargaSpan = document.getElementById('total-harga');
    const bayarBtn = document.getElementById('bayar-btn');

    // --- FUNGSI UTAMA UNTUK UPDATE & LOGIKA ---

    function updateTotal() {
        let total = 0;
        const subtotalElements = itemKeranjangBody.querySelectorAll('.subtotal-item');
        
        subtotalElements.forEach(element => {
            // Hapus "Rp", spasi, dan titik (separator ribuan), lalu konversi ke angka
            const subtotalText = element.textContent.replace('Rp ', '').replace(/\./g, '');
            total += parseInt(subtotalText);
        });

        // Format total menjadi mata uang Rupiah
        totalHargaSpan.textContent = 'Rp ' + total.toLocaleString('id-ID');
    }

    function handleQuantityChange(event) {
        const input = event.target;
        const newQuantity = parseInt(input.value);
        const row = input.closest('tr');
        const hargaSatuan = parseInt(row.dataset.harga);
        const subtotalElement = row.querySelector('.subtotal-item');

        if (newQuantity < 1) {
            input.value = 1;
            return;
        }

        const newSubtotal = newQuantity * hargaSatuan;
        subtotalElement.textContent = 'Rp ' + newSubtotal.toLocaleString('id-ID');

        updateTotal();
    }

    // Fungsi untuk menambahkan baris produk baru ke tabel
    function addProductRow(nama, harga, jumlahAwal = 1) {
        const newRow = document.createElement('tr');
        newRow.dataset.harga = harga; 
        
        const subtotalAwal = harga * jumlahAwal;

        newRow.innerHTML = `
            <td>${nama}</td>
            <td>Rp ${harga.toLocaleString('id-ID')}</td>
            <td><input type="number" value="${jumlahAwal}" min="1" class="quantity-input" style="width: 60px;"></td>
            <td class="subtotal-item">Rp ${subtotalAwal.toLocaleString('id-ID')}</td>
            <td><button class="hapus-btn">Hapus</button></td>
        `;

        itemKeranjangBody.appendChild(newRow);

        // Tambahkan event listener untuk input jumlah (quantity)
        const quantityInput = newRow.querySelector('.quantity-input');
        quantityInput.addEventListener('change', handleQuantityChange);
        quantityInput.addEventListener('input', handleQuantityChange); // Tambah event input juga

        // Tambahkan event listener untuk tombol Hapus
        const hapusBtn = newRow.querySelector('.hapus-btn');
        hapusBtn.addEventListener('click', function() {
            newRow.remove();
            updateTotal();
        });

        updateTotal();
    }

    // --- FITUR BARU: MENAMBAHKAN PRODUK SECARA OTOMATIS ---
    function tambahProdukDefault() {
        // Contoh produk default yang akan ditambahkan saat start
        const produkDefault = [
            { nama: "Mie Instan Goreng", harga: 3500, jumlah: 2 },
            { nama: "Susu Kotak Coklat", harga: 6000, jumlah: 1 },
            { nama: "Kopi Sachet", harga: 1500, jumlah: 5 }
        ];

        produkDefault.forEach(produk => {
            addProductRow(produk.nama, produk.harga, produk.jumlah);
        });
    }

    // --- EVENT LISTENERS PENGGUNA ---

    // Event Listener untuk tombol "Tambahkan ke Keranjang"
    tambahProdukBtn.addEventListener('click', () => {
        const nama = namaProdukInput.value.trim();
        const harga = parseInt(hargaProdukInput.value);

        if (nama === "" || isNaN(harga) || harga <= 0) {
            alert("Silakan masukkan nama produk dan harga yang valid.");
            return;
        }
        
        addProductRow(nama, harga, 1); // Tambahkan dengan jumlah awal 1

        // Bersihkan input
        namaProdukInput.value = '';
        hargaProdukInput.value = '0';
        namaProdukInput.focus();
    });

    // Event Listener untuk tombol "Bayar Sekarang"
    bayarBtn.addEventListener('click', () => {
        const totalText = totalHargaSpan.textContent;
        if (totalText === 'Rp 0') {
            alert("Keranjang belanja masih kosong!");
        } else {
            alert(`Total yang harus dibayar adalah: ${totalText}. Terima kasih!`);
            // Di sini Anda bisa menambahkan logika untuk reset keranjang
            itemKeranjangBody.innerHTML = '';
            updateTotal();
        }
    });

    // Panggil fungsi untuk menambahkan produk default saat halaman dimuat
    tambahProdukDefault();
});
// ... (Kode JavaScript sebelumnya: updateTotal, handleQuantityChange, addProductRow, tambahProdukDefault) ...

// Pastikan Anda juga mendefinisikan elemen-elemen ini di awal file script.js
// const itemKeranjangBody = document.getElementById('item-keranjang');
// const totalHargaSpan = document.getElementById('total-harga');
const strukContainer = document.getElementById('struk-container');
const developerInfo = document.querySelector('footer p').textContent; // Ambil info developer dari footer

// Event Listener untuk tombol "Bayar Sekarang"
bayarBtn.addEventListener('click', () => {
    const totalText = totalHargaSpan.textContent;

    if (totalText === 'Rp 0') {
        alert("Keranjang belanja masih kosong!");
        return;
    }
    
    // 1. Buat Konten Struk
    let strukHTML = `
        <div class="struk">
            <h3 style="text-align: center;">--- STRUK PEMBAYARAN ---</h3>
            <p style="text-align: center;">Toko Kasir Sederhana</p>
            <p style="text-align: center;">Tanggal: ${new Date().toLocaleDateString('id-ID')}</p>
            <p>---------------------------------</p>
            <table>
                <thead>
                    <tr>
                        <th style="text-align: left;">Item</th>
                        <th style="text-align: right;">Jml</th>
                        <th style="text-align: right;">Total</th>
                    </tr>
                </thead>
                <tbody>
    `;
    
    // Ambil data dari setiap baris di keranjang
    const itemRows = itemKeranjangBody.querySelectorAll('tr');
    itemRows.forEach(row => {
        const nama = row.cells[0].textContent;
        const jumlah = row.querySelector('.quantity-input').value;
        const subtotal = row.querySelector('.subtotal-item').textContent;

        // Tambahkan ke HTML struk
        strukHTML += `
            <tr>
                <td style="text-align: left;">${nama}</td>
                <td style="text-align: right;">${jumlah}</td>
                <td style="text-align: right;">${subtotal}</td>
            </tr>
        `;
    });

    // Selesaikan struktur struk
    strukHTML += `
                </tbody>
            </table>
            <p>---------------------------------</p>
            <p style="font-weight: bold;">TOTAL BAYAR: <span style="float: right;">${totalText}</span></p>
            <p>---------------------------------</p>
            <p style="text-align: center;">Terima kasih telah berbelanja!</p>
            <p style="text-align: center; font-size: 0.8em;">${developerInfo}</p>
        </div>
    `;

    // 2. Tampilkan dan Cetak
    strukContainer.innerHTML = strukHTML;
    
    // Tampilkan struk (sebenarnya hanya diperlukan agar window.print bisa melihatnya)
    strukContainer.style.display = 'block'; 

    // Panggil dialog cetak/print
    window.print();
    
    // 3. Bersihkan Struk dan Keranjang Setelah Cetak
    // (Gunakan timeout agar tidak langsung membersihkan sebelum cetak)
    setTimeout(() => {
        strukContainer.style.display = 'none'; // Sembunyikan lagi
        strukContainer.innerHTML = '';
        itemKeranjangBody.innerHTML = ''; // Kosongkan keranjang
        updateTotal(); // Reset total
    }, 100); 

    // alert(`Total yang harus dibayar adalah: ${totalText}. Struk sedang dicetak.`);
});

// Pastikan panggilan tambahProdukDefault() dan updateTotal() ada di akhir file:
// tambahProdukDefault();
// updateTotal();
