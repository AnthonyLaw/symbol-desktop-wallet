<template>
  <div class="finish-sec scroll" @keyup.enter="submit">
    <img src="@/views/resources/img/success.png" alt>
    <span class="set-title"> {{ $t('Import_successful') }}</span>
    <p class="set-title-tips">
      {{ $t('Import_your_account_successful') }}
    </p>
    <div class="finish-col">
      <div class="finish-left">
        <p class="text1">
          {{ $t('Safe_storage_tips') }}
        </p>
        <p class="text">
          {{ $t('Save_backups') }}
        </p>
        <p class="text">
          {{ $t('Don_not_share_mnemonics_with_anyone') }}
        </p>
        <p class="text">
          {{ $t('Beware_of_phishing_Nano_wallet_does_not_naturally_ask_you_to_enter_a_mnemonic') }}
        </p>
        <p class="text">
          {{ $t('If_you_need_to_back_up_your_mnemonics_again_you_can') }}
        </p>
        <p class="text">
          {{ $t('Nem_wallet_can_not_recover_your_mnemonic') }}
        </p>
        <div class="jump-btn">
          <button
            class="button-style validation-button"
            @click="$router.push({name: 'dashboard'})"
          >
            {{ $t('next') }}
          </button>
        </div>
      </div>
      <div class="finish-right">
        <img src="@/views/resources/img/finish.png" alt>
      </div>
    </div>
  </div>
</template>

<script>
import FinalizeTs from './FinalizeTs'
import './Finalize.less'

export default class Finalize extends FinalizeTs {}
</script>
