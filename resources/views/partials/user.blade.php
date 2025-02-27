<dropdown-trigger class="h-9 flex items-center">
    <img
        src="{{ $user->profile_photo_url }}" alt="{{ $user->name }}"
        class="w-8 h-8 mr-3 rounded-full"
    />

    <span class="text-90">
        {{ $user->name ?? $user->email ?? __('Nova User') }}
    </span>
</dropdown-trigger>

<dropdown-menu slot="menu" width="200" direction="rtl">
    <ul class="list-reset">
        <li>
            <a href="{{ route('nova.logout') }}" class="block no-underline text-90 hover:bg-30 p-3">
                {{ __('Logout') }}
            </a>
        </li>
    </ul>
</dropdown-menu>
