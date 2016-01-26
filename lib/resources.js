module.exports = [{
  name: 'profile',
  methods: {
    get: {
      method: 'GET',
      path: '/api/v1/profile'
    },
    update: {
      method: 'POST',
      path: '/api/v1/profile'
    }
  }
}, {
  name: 'listings',
  methods: {
    get: {
      method: 'GET',
      path: '/api/v1/get_listings'
    }
  }
}, {
  name: 'followers',
  methods: {
    get: {
      method: 'GET',
      path: '/api/v1/get_followers'
    }
  }
}, {
  name: 'following',
  methods: {
    get: {
      method: 'GET',
      path: '/api/v1/get_following'
    },
    add: {
      method: 'POST',
      path: '/api/v1/follow'
    },
    remove: {
      method: 'POST',
      path: '/api/v1/unfollow'
    }
  }
}, {
  name: 'social_accounts',
  methods: {
    add: {
      method: 'POST',
      path: '/api/v1/social_accounts'
    },
    remove: {
      method: 'DELETE',
      path: '/api/v1/social_accounts'
    }
  }
}, {
  name: 'contracts',
  methods: {
    get: {
      method: 'GET',
      path: '/api/v1/contracts'
    },
    create: {
      method: 'POST',
      path: '/api/v1/contracts'
    },
    delete: {
      method: 'DELETE',
      path: '/api/v1/contracts'
    },
    purchase: {
      method: 'POST',
      path: '/api/v1/purchase_contract'
    }
  }
}, {
  name: 'shutdown',
  method: 'GET',
  path: '/api/v1/shutdown'
}, {
  name: 'moderator',
  methods: {
    add: {
      method: 'POST',
      path: '/api/v1/make_moderator'
    },
    remove: {
      method: 'POST',
      path: '/api/v1/unmake_moderator'
    }
  }
}, {
  name: 'order',
  methods: {
    get: {
      method: 'GET',
      path: '/api/v1/get_order'
    },
    confirm: {
      method: 'POST',
      path: '/api/v1/confirm_order'
    },
    complete: {
      method: 'POST',
      path: '/api/v1/complete_order'
    }
  }
}, {
  name: 'settings',
  methods: {
    get: {
      method: 'GET',
      path: '/api/v1/settings'
    },
    update: {
      method: 'POST',
      path: '/api/v1/settings'
    }
  }
}, {
  name: 'peers',
  methods: {
    get: {
      method: 'GET',
      path: '/api/v1/connected_peers'
    }
  }
}, {
  name: 'routing_table',
  methods: {
    get: {
      method: 'GET',
      path: '/api/v1/routing_table'
    }
  }
}, {
  name: 'notifications',
  methods: {
    get: {
      method: 'GET',
      path: '/api/v1/get_notifications'
    }
  }
}, {
  name: 'notification',
  methods: {
    mark_as_read: {
      method: 'POST',
      path: '/api/v1/mark_notification_as_read'
    }
  }
}, {
  name: 'messages',
  methods: {
    get: {
      method: 'GET',
      path: '/api/v1/get_chat_messages'
    }
  }
}, {
  name: 'conversations',
  methods: {
    get: {
      method: 'GET',
      path: '/api/v1/get_chat_conversations'
    }
  }
}, {
  name: 'message',
  methods: {
    mark_as_read: {
      method: 'POST',
      path: '/api/v1/mark_chat_message_as_read'
    }
  }
}, {
  name: 'sales',
  methods: {
    get: {
      method: 'GET',
      path: '/api/v1/get_sales'
    }
  }
}, {
  name: 'purchases',
  methods: {
    get: {
      method: 'GET',
      path: '/api/v1/get_purchases'
    }
  }
}, {
  name: 'payments',
  methods: {
    check: {
      method: 'POST',
      path: '/api/v1/check_for_payment'
    }
  }
}, {
  name: 'image',
  methods: {
    get: {
      method: 'GET',
      path: '/api/v1/get_image'
    },
    upload: {
      method: 'POST',
      path: '/api/v1/upload_image'
    }
  }
}];
