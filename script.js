document.addEventListener('DOMContentLoaded', () => {
    const tambahProdukBtn = document.getElementById('tambah-produk-btn');
    const namaProdukInput = document.getElementById('nama-produk');
    const hargaProdukInput = document.getElementById('harga-produk');
    const itemKeranjangBody = document.getElementById('item-keranjang');
    const totalHargaSpan = document.getElementById('total-harga');
    const bayarBtn = document.getElementById('bayar-btn');

    // Fungsi untuk mengupdate total harga
    function updateTotal() {
        let total = 0;
        // Ambil semua elemen subtotal dari keranjang
        const subtotalElements = itemKeranjangBody.querySelectorAll('.subtotal-item');
        
        subtotalElements.forEach(element => {
            // Hapus "Rp" dan koma, lalu konversi ke angka
            const subtotalText = element.textContent.replace('Rp ', '').replace('.', '');
            total += parseInt(subtotalText);
        });

        // Format total menjadi mata uang Rupiah
        totalHargaSpan.textContent = 'Rp ' + total.toLocaleString('id-ID');
    }

    // Fungsi untuk menangani perubahan jumlah (quantity)
    function handleQuantityChange(event) {
        const input = event.target;
        const newQuantity = parseInt(input.value);
        const row = input.closest('tr'); // Dapatkan baris (tr)
        const hargaSatuan = parseInt(row.dataset.harga); // Ambil harga satuan yang disimpan di data-harga
        const subtotalElement = row.querySelector('.subtotal-item');

        if (newQuantity < 1) {
            input.value = 1; // Pastikan minimal 1
            return;
        }

        const newSubtotal = newQuantity * hargaSatuan;
        subtotalElement.textContent = 'Rp ' + newSubtotal.toLocaleString('id-ID');

        updateTotal();
    }

    // Event Listener untuk tombol "Tambahkan ke Keranjang"
    tambahProdukBtn.addEventListener('click', () => {
        const nama = namaProdukInput.value.trim();
        const harga = parseInt(hargaProdukInput.value);

        if (nama === "" || isNaN(harga) || harga <= 0) {
            alert("Silakan masukkan nama produk dan harga yang valid.");
            return;
        }

        // 1. Buat baris baru untuk item
        const newRow = document.createElement('tr');
        // Simpan harga satuan di atribut data (penting untuk perhitungan)
        newRow.dataset.harga = harga; 
        
        // 2. Isi baris dengan data dan kontrol
        const subtotalAwal = harga * 1;

        newRow.innerHTML = `
            <td>${nama}</td>
            <td>Rp ${harga.toLocaleString('id-ID')}</td>
            <td><input type="number" value="1" min="1" class="quantity-input" style="width: 60px;"></td>
            <td class="subtotal-item">Rp ${subtotalAwal.toLocaleString('id-ID')}</td>
            <td><button class="hapus-btn">Hapus</button></td>
        `;

        // 3. Tambahkan baris ke tabel
        itemKeranjangBody.appendChild(newRow);

        // 4. Tambahkan event listener untuk input jumlah (quantity)
        const quantityInput = newRow.querySelector('.quantity-input');
        quantityInput.addEventListener('change', handleQuantityChange);

        // 5. Tambahkan event listener untuk tombol Hapus
        const hapusBtn = newRow.querySelector('.hapus-btn');
        hapusBtn.addEventListener('click', function() {
            newRow.remove(); // Hapus baris dari DOM
            updateTotal(); // Perbarui total setelah penghapusan
        });

        // 6. Perbarui total harga
        updateTotal();

        // 7. Bersihkan input
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
            // Di sini Anda bisa menambahkan logika untuk reset keranjang atau proses pembayaran
        }
    });

    // Panggil updateTotal saat pertama kali halaman dimuat
    updateTotal(); 
});
