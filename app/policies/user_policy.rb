class UserPolicy < ApplicationPolicy
  class Scope < Scope
    def resolve
      scope.all
    end
  end

  def index?
    true
  end
  def show?
    true
  end
  def connect?
    true
  end

  def unconnect?
    true
  end
end
