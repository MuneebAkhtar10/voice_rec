# frozen_string_literal: true

class VoiceNote < ApplicationRecord
	has_one_attached :song_file
end
