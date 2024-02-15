<script>
let imgUrl = "src/image/logosambu.png"

</script>

<div class="flex flex-col justify-center items-center h-screen">
    <img class="h-20 max-w-50" src="{imgUrl}" alt="Logo Sambu Group"/>
    <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" method="post">
        <div class="mb-4">
            <label for="username" class="block text-blue-700 text-sm mb-2 font-bold">Username</label>
            <input class="shadow border rounded w-full py-2 px-3 text-blue-700 leading-tight" type="text" name="username" id="username" placeholder="Paijo">
        </div>
        <div class="mb-4">
            <label for="password" class="block text-blue-700 text-sm mb-2 font-bold">Password</label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-blue-700 mb-3 leading-tight focus:outline-none" placeholder="Password" id="password" name="password" type="password">
        </div>
        <div class="flex items-center justify-between mb-4">
            <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">L O G I N</button>
        </div>
        <div class="flex items-center justify-between mb-2">
            <label for="daftar" class="block text-blue-700 text-sm mb-2 font-italic">Lupa Password ? Reset Password</label>
         </div>
        <div class="flex items-center justify-between mb-2">
           <label for="daftar" class="block text-blue-700 text-sm mb-2 font-italic">Belum Punya Akun ? Daftar Disini</label>
        </div>
    </form>
    <label for="copyright" class="block text-blue-700 text-sm mb-2 font-italic ">Copyright  © 2024 PT Pulau Sambu (Kuala Enok). All rights reserved.</label>
</div>
